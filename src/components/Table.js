import React from 'react';
import styled from 'styled-components';
import color from './utility';
const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  color: ${color.black};
`;

const TableHead = styled.thead`
  font-size: 12px;
  background: ${color.primary};
  color: white;
`;

const TableHeadCell = styled.th`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  border: solid 1px ${color.primary};
`;
const TableBody = styled.tbody`
  border: solid 1px ${color.primary};
`;
const TableRow = styled.tr`
  padding: 10px;
  white-space: nowrap;
  text-align: center;

  &:nth-child(2n) {
    color: white;
    background: ${color.primary};
  }
`;
const TableCell = styled.td`
  padding: 10px;
  white-space: nowrap;
  text-align: center;
  border: solid 1px ${color.primary};
`;

export { Table, TableHead, TableBody, TableRow, TableCell, TableHeadCell };
