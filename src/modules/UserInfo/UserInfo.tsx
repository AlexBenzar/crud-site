import { useParams } from "react-router-dom";
import { Avatar } from "img";
import { Typography, Button, Loader } from "common/index";
import styles from "./UserInfo.module.scss";
import { useGetUserDataQuery, useDeleteUserDataMutation } from "store/slices/authSlice";
import { UserForm, DeleteForm } from "components/index";
import { useState } from "react";

export const UserInfo: React.FC = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const { data, isLoading, isFetching } = useGetUserDataQuery(id as string);
  const [deleteUser, { error }] = useDeleteUserDataMutation();
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return data ? (
    <div className={styles.user}>
      <div className={styles.user__img}>
        <img src={(data.picture as string) ?? Avatar} alt="Avatar" />
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
        <Button text="Edit" isBlack={true} className={styles.user__button} onClick={() => setIsEdit(true)} />
        <Button text="Delete" isBlack={true} onClick={() => setIsDelete(true)} />
      </div>
      {isEdit && <UserForm data={data} isOpen={setIsEdit} />}
      {isDelete && (
        <DeleteForm id={data._id} isOpen={setIsDelete} changeProfilesFunction={deleteUser} error={error} nav="/users" />
      )}
    </div>
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
