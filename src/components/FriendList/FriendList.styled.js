import styled from 'styled-components';

export const WrapperFriends = styled.div`
  margin: 0 auto;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const FriendItemEl = styled.li`
  padding: 10px;
  display: flex;
  gap: 10px;
  width: 350px;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const IsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${prop => {
    return prop.active ? '#0BDA51' : '#F34723';
  }};
`;
