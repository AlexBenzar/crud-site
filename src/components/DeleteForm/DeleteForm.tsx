import { Button, Typography } from "common/index";
import styles from "./DeleteForm.module.scss";
import { DeleteFormType, ErrorResponse } from "types/index";
import { useNavigate } from "react-router-dom";

export const DeleteForm: React.FC<DeleteFormType> = ({ id, isOpen, deleteDataFunction, error, nav }) => {
  const navigate = useNavigate();

  async function DeleteHandler() {
    const { error }: ErrorResponse = await deleteDataFunction(id);
    if (!error) {
      isOpen(false);
      nav && navigate(nav);
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
        {error && "data" in error && <Typography variant="error-1">{error?.data?.message}</Typography>}
      </div>
    </div>
  );
};
