import styles from "./Profile.module.scss";
import { ProfileList } from "components/index";

export const Profiles: React.FC = () => {
  return (
    <div className={styles.profile}>
      <ProfileList />
    </div>
  );
};
