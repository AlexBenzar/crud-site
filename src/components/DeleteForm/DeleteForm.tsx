import { Button, Typography } from "common/index";
import styles from "./DeleteForm.module.scss";
import { ProfileFormType, ErrorResponse } from "types/index";
import { useNavigate } from "react-router-dom";

export const DeleteForm: React.FC<ProfileFormType> = ({ id, isOpen, changeProfilesFunction, error, nav }) => {
  const navigate = useNavigate();

  async function DeleteHandler() {
    const { error }: ErrorResponse = await changeProfilesFunction(id);
    if (!error) {
      isOpen(false);
      nav && navigate(nav);
    }
  }
  return (
    <div className={styles.delete} onClick={() => isOpen(false)}>
      <div className={styles.delete__form} onClick={(e) => e.stopPropagation()}>
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
