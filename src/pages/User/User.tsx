import styles from "./User.module.scss";
import { ProfileList, UserInfo } from "modules/index";

export const User: React.FC = () => {
  return (
    <div className={styles.user}>
      <UserInfo />
      <ProfileList />
    </div>
  );
};
