import { Loader, Typography } from "common/index";
import { DashboardUsers, DashboardProfiles, DashboardAge } from "img";
import styles from "./Dashboard.module.scss";
import { useGetAllProfilesQuery } from "store/slices/profileSlice";
import { useUsersQuery } from "store/slices/authSlice";
import { useEffect, useState } from "react";

export const Dashboard: React.FC = () => {
  const { data: users } = useUsersQuery();
  const { data: profiles } = useGetAllProfilesQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [sumOfUsers, setSumOfUsers] = useState(0);
  const [sumOfProfiles, setSumOfProfiles] = useState(0);
  const [sumOfProfilesOlderThen18, setSumOfProfilesOlderThen18] = useState(0);

  const info = [
    { img: DashboardUsers, key: "Users", value: sumOfUsers },
    { img: DashboardProfiles, key: "Profiles", value: sumOfProfiles },
    { img: DashboardAge, key: "Users 18+", value: sumOfProfilesOlderThen18 },
  ];

  useEffect(() => {
    if (users && profiles) {
      setSumOfUsers(users.reduce((res) => res + 1, 0));
      setSumOfProfiles(profiles.reduce((res) => res + 1, 0));
      setSumOfProfilesOlderThen18(
        profiles.reduce((res, val) => {
          const age = Date.now() - new Date(val.birthdate).getTime();
          if (new Date(age).getUTCFullYear() - 1970 >= 18) {
            return res + 1;
          }
          return res;
        }, 0),
      );
      setIsLoading(true);
    }
  }, [users, profiles]);

  return isLoading ? (
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
    <Loader />
  );
};
