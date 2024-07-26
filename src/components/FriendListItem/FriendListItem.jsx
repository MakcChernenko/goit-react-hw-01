import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css, css.cardFriend)}>
      <img
        className={clsx(css, css.img)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css, css.textName)}>{name}</p>
      <p className={clsx(css, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
