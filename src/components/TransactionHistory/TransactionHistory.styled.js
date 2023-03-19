import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 600px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #1e90ff;
  color: #fff;
`;

export const TableName = styled.tr`
  text-align: center;
  font-weight: 900;
  font-size: 20px;
`;

export const TableCell = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
`;

export const TableBody = styled.tbody`
  font-size: 18px;
  text-align: center;
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: #c5d0e6;
  }
`;

export const TableItem = styled.td`
  padding: 12px;
  border: 1px solid #c5d0e6;
`;
