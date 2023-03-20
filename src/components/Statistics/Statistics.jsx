import PropTypes from 'prop-types';
import {
  StatisticList,
  Wrapper,
  StatisticItem,
  StaticticsTitle,
} from './Statistics.styled';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <StaticticsTitle>{title}</StaticticsTitle>}
      <StatisticList>
        {stats.map(stat => (
          <StatisticItem key={stat.id}>
            <StatisticsItem stat={stat} />
          </StatisticItem>
        ))}
      </StatisticList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
