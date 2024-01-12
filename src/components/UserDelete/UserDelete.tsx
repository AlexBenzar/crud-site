import { Button, Typography } from "common/index";
import styles from "./UserDelete.module.scss";
import { UserFormType } from "types/index";
import { useNavigate } from "react-router-dom";
import { useDeleteUserDataMutation } from "store/slices/authSlice";

export const UserDelete: React.FC<UserFormType> = ({ data, isOpen, refetch }) => {
  const navigate = useNavigate();
  const [deleteUser, { error }] = useDeleteUserDataMutation();
  async function DeleteHandler() {
    const { error }: { data?: { message: string }; error?: unknown } = await deleteUser(data._id);
    if (!error) {
      refetch();
      navigate("/users");
    }
  }
  return (
    <div className={styles.delete}>
      <div className={styles.delete__form}>
        <Typography variant="body-3" className={styles.delete__text}>
          Are you sure you want to delete user?
        </Typography>
        <div className={styles.delete__buttons}>
          <Button text="Yes" isBlack={true} className={styles.delete__button} onClick={DeleteHandler} />
          <Button text="No" isBlack={true} onClick={() => isOpen(false)} />
        </div>
        {error && "data" in error && <Typography variant="error-1">{error.data.message}</Typography>}
      </div>
    </div>
  );
};
