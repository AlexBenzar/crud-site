import styles from "./Users.module.scss";
import { Loader, Pagination, Typography } from "common/index";
import { UserCard } from "components/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsersQuery } from "store/slices/authSlice";

export const Users: React.FC = () => {
  const { data, isLoading, isFetching } = useUsersQuery();
  const [page, setPage] = useState(1);
  const [count] = useState(2);

  if (isLoading || isFetching) {
    return <Loader />;
  }
  return data ? (
    <div className={styles.users}>
      <Typography variant="title-2" className={styles.users__title}>
        Users
      </Typography>
      <div className={styles.users__sort}></div>
      <div className={styles.users__cards}>
        {data
          .filter((_item, index) => index >= page * count - count && index < page * count)
          .map((item) => (
            <Link key={item._id} to={`/users/${item._id}`} className={styles.users__card}>
              <UserCard {...item} />
            </Link>
          ))}
      </div>
      <Pagination page={page} setPage={setPage} total={Math.ceil(data.length / count)} className={styles.users__pagination} />
    </div>
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
