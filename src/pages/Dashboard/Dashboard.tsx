import { Typography } from "common/index";
import { DashboardUsers, DashboardProfiles, DashboardAge } from "img";
import styles from "./Dashboard.module.scss";

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Typography variant="title-2" className={styles.dashboard__title}>
        Dashboard
      </Typography>
      <div className={styles.dashboard__card}>
        <div className={styles.dashboard__stat}>
          <Typography variant="body-1" className={styles.dashboard__category}>
            <img src={DashboardUsers} alt="Users" />
            Users
          </Typography>
          <Typography variant="body-3" className={styles.dashboard__result}>
            400
          </Typography>
        </div>
        <div className={styles.dashboard__stat}>
          <Typography variant="body-1" className={styles.dashboard__category}>
            <img src={DashboardProfiles} alt="Profiles" />
            Profiles
          </Typography>
          <Typography variant="body-3" className={styles.dashboard__result}>
            500
          </Typography>
        </div>
        <div className={styles.dashboard__stat}>
          <Typography variant="body-1" className={styles.dashboard__category}>
            <img src={DashboardAge} alt="Age" />
            Users 18+
          </Typography>
          <Typography variant="body-3" className={styles.dashboard__result}>
            50
          </Typography>
        </div>
      </div>
    </div>
  );
};
