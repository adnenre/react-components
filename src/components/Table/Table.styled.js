import styled from 'styled-components';
import theme from '../../theme';
const TableContainer = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  color: ${theme.colors.$black};
  table-layout: fixed;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Display ellipsis (...) for truncated content */
  font-size: 12px;
  background: ${theme.colors.$primary};
  color: white;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  border: solid 1px ${theme.colors.$primary};
  width: 50px;
`;
const TableBody = styled.tbody`
  border: solid 1px ${theme.colors.$primary};
`;
const TableRow = styled.tr`
  padding: 10px;
  white-space: nowrap;
  text-align: center;

  &:nth-child(2n) {
    color: white;
    background: ${theme.colors.$primary};
  }
`;
const TableCell = styled.td`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  border: solid 1px ${theme.colors.$primary};
`;

export {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
};
