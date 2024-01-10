import styles from "./UserCard.module.scss";
import { Avatar } from "img";
import { Typography } from "common/index";
import { User } from "types/index";

export const UserCard: React.FC<User> = ({ picture, username, email }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={picture && Avatar} alt="profile pic" />
      </div>
      <Typography variant="body-2" className={styles.card__text}>
        {username}
      </Typography>
      <Typography variant="body-2" className={styles.card__text}>
        {email}
      </Typography>
      <Typography variant="body-2" className={styles.card__profiles}>
        3 profiles
      </Typography>
    </div>
  );
};
