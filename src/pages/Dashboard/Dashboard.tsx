import { Typography } from "common/index";
import { DashboardUsers, DashboardProfiles, DashboardAge } from "img";
import styles from "./Dashboard.module.scss";

export const Dashboard: React.FC = () => {
  const info = [
    { img: DashboardUsers, key: "Users", value: 400 },
    { img: DashboardProfiles, key: "Profiles", value: 500 },
    { img: DashboardAge, key: "Users 18+", value: 50 },
  ];
  return (
    <div className={styles.dashboard}>
      <Typography variant="title-2" className={styles.dashboard__title}>
        Dashboard
      </Typography>
      <div className={styles.dashboard__card}>
        {info.map((data, index) => (
          <div className={styles.dashboard__stat} key={index}>
            <Typography variant="body-1" className={styles.dashboard__category}>
              <img src={data.img} alt="Users" />
              {data.key}
            </Typography>
            <Typography variant="body-3" className={styles.dashboard__result}>
              {data.value}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
