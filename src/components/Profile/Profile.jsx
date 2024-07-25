import css from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css, css.profile)}>
      <div className={clsx(css, css.description)}>
        <img className={clsx(css, css.img)} src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx(css, css.list)}>
        <li className={clsx(css, css.item)}>
          <span>Followers</span>
          <span>{stats.followers} </span>
        </li>
        <li className={clsx(css, css.item)}>
          <span>Views</span>
          <span>{stats.views} </span>
        </li>
        <li className={clsx(css, css.item)}>
          <span>Likes</span>
          <span>{stats.likes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
