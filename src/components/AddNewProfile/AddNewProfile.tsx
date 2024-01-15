import styles from "./AddNewProfile.module.scss";
import { Typography } from "common/index";
import { ProfileIcon } from "img";

export const AddNewProfile: React.FC = () => {
  return (
    <div className={styles.create}>
      <div className={styles.create__img}>
        <img src={ProfileIcon} alt="Create new profile" />
      </div>
      <Typography variant="body-2">Create new profile</Typography>
    </div>
  );
};
