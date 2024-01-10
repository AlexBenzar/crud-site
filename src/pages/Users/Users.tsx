import styles from "./Users.module.scss";
import { Typography } from "common/index";
import { UserCard } from "components/index";
import { Link } from "react-router-dom";
import { useUsersQuery } from "store/slices/authSlice";

export const Users: React.FC = () => {
  const { data, isLoading, isFetching } = useUsersQuery();

  if (isLoading || isFetching) {
    return "Loading...";
  }
  return data ? (
    <div className={styles.users}>
      <Typography variant="title-2" className={styles.users__title}>
        Users
      </Typography>
      <div className={styles.users__sort}></div>
      <div className={styles.users__cards}>
        {data.map((item) => (
          <Link key={item._id} to={`users/${item._id}`} className={styles.users__card}>
            <UserCard {...item} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <>Error occur</>
  );
};
