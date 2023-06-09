import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendItemEl, FriendsList, WrapperFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <WrapperFriends>
      <FriendsList>
        {friends.map(friend => (
          <FriendItemEl key={friend.id}>
            <FriendItem friend={friend} />
          </FriendItemEl>
        ))}
      </FriendsList>
    </WrapperFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
