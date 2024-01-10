import styles from "./UserCard.module.scss";
import { Avatar } from "img";
import { Typography } from "common/index";

export const UserCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={Avatar} alt="profile pic" />
      </div>
      <Typography variant="body-2" className={styles.card__text}>
        john_duke55
      </Typography>
      <Typography variant="body-2" className={styles.card__text}>
        john_duke232@gmail.com
      </Typography>
      <Typography variant="body-2" className={styles.card__profiles}>
        3 profiles
      </Typography>
    </div>
  );
};
