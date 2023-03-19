import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 10px;
  border: 1px solid #000;
  width: 300px;
  height: 350px;
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
export const UserInfoImg = styled.img`
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const UserInfoText = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

export const UserInfoAbout = styled.p`
  font-size: 16px;
  color: #4d7198;
`;

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  height: 78px;
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
  gap: 5px;
  width: calc(100% / 3);

  :not(:last-child) {
    border-right: 1px solid #000;
    height: 100%;
  }
`;

export const ListItemQuantity = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
