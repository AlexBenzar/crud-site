import styles from "./UsersList.module.scss";
import { Loader, Typography } from "common/index";
import { Pagination, UserCard } from "components/index";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsersQuery } from "store/slices/authSlice";

export const UsersList: React.FC = () => {
  const { data, isLoading, isFetching, isError } = useUsersQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersAmount] = useState(8);

  if (isError) {
    return <Typography variant="error-1">Error occur</Typography>;
  }

  return data ? (
    <div className={styles.users}>
      <Typography variant="title-2" className={styles.users__title}>
        Users
      </Typography>
      <div className={styles.users__cards}>
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          data
            .filter((_item, index) => index >= currentPage * usersAmount - usersAmount && index < currentPage * usersAmount)
            .map((item) => (
              <Link key={item._id} to={`/users/${item._id}`} className={styles.users__card}>
                <UserCard {...item} />
              </Link>
            ))
        )}
      </div>
      <Pagination
        page={currentPage}
        setPage={setCurrentPage}
        total={Math.ceil(data.length / usersAmount)}
        className={styles.users__pagination}
      />
    </div>
  ) : (
    <Loader />
  );
};
