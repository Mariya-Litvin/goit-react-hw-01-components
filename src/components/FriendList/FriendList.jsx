import { FriendsList, FriendItem, WrapperFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <WrapperFriends>
      <FriendsList>
        {friends.map(friend => (
          <FriendItem key={friend.id}>
            <span className="status">{friend.isOnline}</span>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="class">{friend.name}</p>
          </FriendItem>
        ))}
      </FriendsList>
    </WrapperFriends>
  );
};
