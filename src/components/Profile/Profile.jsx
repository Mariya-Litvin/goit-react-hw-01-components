import { FiThumbsUp } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import {
  List,
  ListItem,
  ListItemQuantity,
  UserInfo,
  Wrapper,
  UserInfoText,
  UserInfoAbout,
  UserInfoImg,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => (
  <Wrapper>
    <UserInfo>
      <UserInfoImg src={avatar} alt="User avatar" width="180" />
      <UserInfoText>{username}</UserInfoText>
      <UserInfoAbout>@{tag}</UserInfoAbout>
      <UserInfoAbout>{location}</UserInfoAbout>
    </UserInfo>
    <List>
      <ListItem>
        <FiUsers />
        <ListItemQuantity>{stats.followers}</ListItemQuantity>
      </ListItem>
      <ListItem>
        <FiEye />
        <ListItemQuantity>{stats.views}</ListItemQuantity>
      </ListItem>
      <ListItem>
        <FiThumbsUp />
        <ListItemQuantity>{stats.likes}</ListItemQuantity>
      </ListItem>
    </List>
  </Wrapper>
);

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
