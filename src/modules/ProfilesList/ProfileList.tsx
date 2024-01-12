import { ProfileCard } from "components/index";
import styles from "./ProfileList.module.scss";
import { Typography } from "common/index";

export const ProfileList: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Typography variant="title-2" className={styles.profile__title}>
        Profiles
      </Typography>
      <div className={styles.profile__list}>
        <div className={styles.profile__item}>
          <ProfileCard />
        </div>
        <div className={styles.profile__item}>
          <ProfileCard />
        </div>
        <div className={styles.profile__item}>
          <ProfileCard />
        </div>
        <div className={styles.profile__item}>
          <ProfileCard />
        </div>
        <div className={styles.profile__item}>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};
