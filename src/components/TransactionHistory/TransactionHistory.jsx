import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableName,
  TableCell,
  TableBody,
  TableRow,
} from './TransactionHistory.styled';
import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableName>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </TableName>
      </TableHead>
      <TableBody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TransactionHistoryItem item={item} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
