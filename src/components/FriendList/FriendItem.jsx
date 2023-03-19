import { IsOnline } from './FriendList.styled';

export const FriendItem = ({ friend }) => {
  return (
    <>
      <IsOnline active={friend.isOnline}></IsOnline>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="class">{friend.name}</p>
    </>
  );
};
