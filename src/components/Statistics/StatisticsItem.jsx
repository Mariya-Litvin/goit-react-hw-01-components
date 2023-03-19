export const StatisticsItem = ({ stat }) => {
  return (
    <>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </>
  );
};
