import { useParams } from "react-router-dom";
import { Avatar } from "img";
import { Typography, Button, Loader } from "common/index";
import styles from "./UserInfo.module.scss";
import { useProfilesQuery } from "store/slices/authSlice";
import { UserForm } from "components/index";

export const UserInfo: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useProfilesQuery(id as string);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return data ? (
    <div className={styles.user}>
      <div className={styles.user__img}>
        <img src={data.picture ?? Avatar} alt="Avatar" />
      </div>
      <Typography variant="body-1" className={styles.user__name}>
        {data.username}
      </Typography>
      <Typography variant="body-1" className={styles.user__email}>
        {data.email}
      </Typography>
      <Typography variant="body-1" className={styles.user__role}>
        {data.role}
      </Typography>
      <div className={styles.user__buttons}>
        <Button text="Edit" isBlack={true} className={styles.user__button} />
        <Button text="Delete" isBlack={true} />
      </div>
      <UserForm />
    </div>
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
