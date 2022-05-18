import PropTypes from 'prop-types';
import users from './Profile/user'
import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistic/Statistics.jsx';
import { Friendlist } from './FriendsList/Friendlist.jsx';
import { Transactions } from './Transactions/Transactions.jsx';



export const App = () => {
  return (
    <div>
      <Profile
    username={users.username}
    tag={users.tag}
    location={users.location}
    avatar={users.avatar}
    followers = {users.stats.followers}
    views = {users.stats.views}
    likes = {users.stats.likes}
    />
      <Statistics/>
      <Friendlist/>
      <Transactions/>
    </div>
    
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
 }