import { FiThumbsUp } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
import {
  List,
  ListItem,
  ListItemQuantity,
  UserInfo,
  Wrapper,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => (
  <Wrapper>
    <UserInfo>
      <img className="avatar" src={avatar} alt="User avatar" width="150" />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
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
