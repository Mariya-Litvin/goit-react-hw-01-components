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
  width: 250px;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #000;

  background-color: ${prop => {
    return prop.active ? '#0BDA51' : '#F34723';
  }};
`;
