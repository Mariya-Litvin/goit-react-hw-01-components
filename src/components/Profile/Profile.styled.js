import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  border: 1px solid #000;
  width: 240px;
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #d7d7d7;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;

  :not(:last-child) {
    border-right: 1px solid #000;
    height: 100%;
    padding-right: 10px;
  }
`;

export const ListItemQuantity = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
