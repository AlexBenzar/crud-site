import { ProfileList } from "modules/index";
import styles from "./Profile.module.scss";

export const Profiles: React.FC = () => {
  return (
    <div className={styles.profile}>
      <ProfileList />
    </div>
  );
};
