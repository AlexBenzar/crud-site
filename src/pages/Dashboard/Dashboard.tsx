import { Loader, Typography } from "common/index";
import { DashboardUsers, DashboardProfiles, DashboardAge } from "img";
import { useGetDashboardDataQuery } from "store/slices/authSlice";
import styles from "./Dashboard.module.scss";

export const Dashboard: React.FC = () => {
  const { data, isFetching, isLoading } = useGetDashboardDataQuery();
  const info = [
    { img: DashboardUsers, key: "Users", value: data?.sumOfUsers },
    { img: DashboardProfiles, key: "Profiles", value: data?.sumOfProfiles },
    { img: DashboardAge, key: "Users 18+", value: data?.sumOfProfilesOlderThen18 },
  ];

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return data ? (
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
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
