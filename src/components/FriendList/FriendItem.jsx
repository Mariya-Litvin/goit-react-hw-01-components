import PropTypes from 'prop-types';
import { IsOnline } from './FriendList.styled';

export const FriendItem = ({ friend }) => {
  return (
    <>
      <IsOnline active={friend.isOnline}></IsOnline>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
