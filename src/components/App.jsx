import users from './Profile/user'
import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistic/Statistics.jsx';
import { Friendlist } from './FriendsList/Friendlist.jsx';
import { Transactions } from './Transactions/Transactions.jsx';
import friends from './FriendsList/friends.json'


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
      <Friendlist
      friendsList = {friends}
      />
      <Transactions/>
    </div>
    
  );
};


