import styleProfile from "./Profile.module.css";

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
