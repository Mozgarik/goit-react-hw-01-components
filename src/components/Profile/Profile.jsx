import styleProfile from "./Profile.module.css";
import PropTypes from 'prop-types';


export const Profile = ({username, tag, location, avatar, followers, views, likes}) => {
  return (
    <div className={styleProfile.profile}>
    <div className={styleProfile.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styleProfile.avatar}
      />
      <p className={styleProfile.name}>{username}</p>
      <p className={styleProfile.tag}>@{tag}</p>
      <p className={styleProfile.location}>{location}</p>
    </div>
  
    <ul className={styleProfile.stats}>
      <li className={styleProfile.item}>
        <span className={styleProfile.label}>Followers:</span>
        <span className={styleProfile.followers}>{followers}</span>
      </li>
      <li className={styleProfile.item}>
        <span className={styleProfile.label}>Views:</span>
        <span className={styleProfile.followers}>{views}</span>
      </li>
      <li className={styleProfile.item}>
        <span className={styleProfile.label}>Likes:</span>
        <span className={styleProfile.followers}>{likes}</span>
      </li>
    </ul>
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