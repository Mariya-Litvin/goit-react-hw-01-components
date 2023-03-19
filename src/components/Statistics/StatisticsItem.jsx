import PropTypes from 'prop-types';
import { Percentage } from './Statistics.styled';

export const StatisticsItem = ({ stat }) => {
  return (
    <>
      <span>{stat.label}</span>
      <Percentage>{stat.percentage}%</Percentage>
    </>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
