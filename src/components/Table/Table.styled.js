import styled from 'styled-components';
import theme from '../../theme';
const TableContainer = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  color: ${theme.color.$black};
  table-layout: fixed;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis; /* Display ellipsis (...) for truncated content */
  font-size: 12px;
  background: ${theme.color.$primary};
  color: white;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  border: ${theme.border.thin} ${theme.color.$primary};
  width: 50px;
  user-select: none;
`;
const TableBody = styled.tbody`
  border: ${theme.border.thin} ${theme.color.$primary};
`;
const TableRow = styled.tr`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  ${(props) => {
    if (props.$striped) {
      return `
      &:nth-child(2n) {
        color: white;
        background: ${theme.color.$primary};
      }
      `;
    }
  }}
`;
const TableCell = styled.td`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  ${(props) => {
    if (props.$withBorder) {
      return `border : ${theme.border.thin} ${theme.color.$primary}`;
    }
    return `border : none`;
  }};
`;

export {
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeadCell,
};
