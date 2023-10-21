import React, { createContext, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
} from './Table.styled';

// CREATE CONTEXT
const TableContext = createContext();

// CREATE useTableContext
const useTableContext = () => useContext(TableContext);

// TABLE HEAD COMPONENT
const TabHead = () => {
  const { columns } = useTableContext();
  return (
    <TableHead data-testid="table-thead">
      <TableRow key="table_head">
        {columns.map((col, index) => (
          <TableHeadCell key={col}>{col}</TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

// TABLE BODY COMPONENT
const TabBody = ({ withBorder, striped }) => {
  const { rows } = useTableContext();

  return (
    <TableBody data-testid="table-tbody">
      {rows.map((row) => (
        <TableRow key={row.id} $striped={striped}>
          {Object.values(row).map((col, index) => (
            <TableCell key={index} $withBorder={withBorder}>
              {col}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

TabBody.propTypes = {
  striped: PropTypes.bool,
  withBorder: PropTypes.bool,
};

const { Provider: TableProvider } = TableContext;

const ResizableTable = ({ children }) => {
  const tableRef = useRef(null);
  const colsRef = useRef([]);

  const createResizeDiv = () => {
    const tableHight = tableRef.current.offsetHeight;
    const resizeDiv = document.createElement('div');
    resizeDiv.style.top = 0;
    resizeDiv.style.right = '-2px';
    resizeDiv.style.width = '5px';
    resizeDiv.style.position = 'absolute';
    resizeDiv.style.cursor = 'col-resize';
    resizeDiv.style.userSelect = 'none';
    resizeDiv.style.height = tableHight + 'px';
    return resizeDiv;
  };

  useEffect(() => {
    const setListeners = (div) => {
      div.addEventListener('mousedown', handleResizeStart);
      div.addEventListener('mouseover', handleMouseOver);
      div.addEventListener('mouseout', handleMouseOut);
    };
    const getBorderBoxOffset = (element) => {
      if (window.getComputedStyle) {
        const style = window.getComputedStyle(element, null);
        const paddingLeft = parseInt(
          style.getPropertyValue('padding-left'),
          10
        );
        const paddingRight = parseInt(
          style.getPropertyValue('padding-right'),
          10
        );
        return paddingLeft + paddingRight;
      }
      return 0;
    };
    const handleResizeStart = (e) => {
      const row = e.target.parentElement;
      const nextRow = row.nextElementSibling;
      const initialX = e.pageX;
      const borderBoxOffset = getBorderBoxOffset(row);

      const initialWidth = row.offsetWidth - borderBoxOffset;
      let nextWidth = null;
      if (nextRow) {
        nextWidth = nextRow.offsetWidth - borderBoxOffset;
      }

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      function handleMouseMove(e) {
        const delta = e.pageX - initialX;
        const newWidth = initialWidth + delta;
        row.style.cursor = 'col-resize';
        row.style.width = `${newWidth}px`;

        if (nextRow && nextWidth !== null) {
          const newNextWidth = nextWidth - delta;
          nextRow.style.width = `${newNextWidth}px`;
        }
      }

      function handleMouseUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      }
    };

    const handleMouseOver = (e) => {
      e.target.style.borderRight = '4px solid #07a';
    };

    const handleMouseOut = (e) => {
      e.target.style.borderRight = '';
    };

    if (tableRef.current) {
      const headerRow = tableRef.current.querySelectorAll('tr');
      const headerCols = headerRow ? Array.from(headerRow[0].children) : [];

      if (headerCols.length) {
        tableRef.current.style.overflow = 'hidden';

        headerCols.forEach((col) => {
          const resizeDiv = createResizeDiv();
          setListeners(resizeDiv);
          col.appendChild(resizeDiv);
          colsRef.current.push(resizeDiv);
          col.style.position = 'relative';
        });
      }
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      colsRef.current.forEach((div) => {
        div.removeEventListener('mousedown', handleResizeStart);
        div.removeEventListener('mouseover', handleMouseOver);
        div.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return <TableContainer ref={tableRef}>{children}</TableContainer>;
};
// TABLE COMPONENT
const Table = ({ rows, columns, resizable, withBorder, striped }) => {
  // Calculate column style based on width

  return (
    <TableProvider
      value={{
        columns,
        rows,
      }}
    >
      {resizable ? (
        <ResizableTable>
          <TabHead />
          <TabBody withBorder={withBorder} striped={striped} />
        </ResizableTable>
      ) : (
        <TableContainer>
          <TabHead />
          <TabBody withBorder={withBorder} striped={striped} />
        </TableContainer>
      )}
    </TableProvider>
  );
};
ResizableTable.propTypes = {
  children: PropTypes.node,
};
Table.defaultProps = {
  resizable: false,
  withBorder: false,
  striped: false,
};
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  resizable: PropTypes.bool,
  withBorder: PropTypes.bool,
  striped: PropTypes.bool,
};
export default Table;
