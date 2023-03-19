import PropTypes from 'prop-types';
import { TableItem } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({ item }) => {
  return (
    <>
      <TableItem>{item.type}</TableItem>
      <TableItem>{item.amount}</TableItem>
      <TableItem>{item.currency}</TableItem>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
