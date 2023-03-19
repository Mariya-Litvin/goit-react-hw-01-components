import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  width: 450px;
  height: 150px;
  border-radius: 5px;
  background-color: #c5d0e6;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const StatisticList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1px solid #000;
  font-size: 16px;
  padding: 10px;
  width: 60px;
  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`};
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
