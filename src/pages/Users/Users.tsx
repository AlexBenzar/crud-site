import styles from "./Users.module.scss";
import { Typography } from "common/index";
import { UserCard } from "components/index";

export const Users: React.FC = () => {
  return (
    <div className={styles.users}>
      <Typography variant="title-2" className={styles.users__title}>
        Users
      </Typography>
      <div className={styles.users__sort}></div>
      <div className={styles.users__cards}>
        <div className={styles.users__card}>
          <UserCard />
        </div>
        <div className={styles.users__card}>
          <UserCard />
        </div>
        <div className={styles.users__card}>
          <UserCard />
        </div>
        <div className={styles.users__card}>
          <UserCard />
        </div>
        <div className={styles.users__card}>
          <UserCard />
        </div>
      </div>
    </div>
  );
};
