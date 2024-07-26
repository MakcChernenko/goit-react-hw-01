import clsx from "clsx";
import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css, css.list)}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={clsx(css, css.item)} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
