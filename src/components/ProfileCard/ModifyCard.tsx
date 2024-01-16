import { Button } from "common/index";
import styles from "./ProfileCard.module.scss";

export const ModifyCard: React.FC<{ isHover: boolean; setIsDelete: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  isHover,
  setIsDelete,
}) => {
  return (
    <div className={`${styles.modify} ${!isHover && styles.modify__hide}`}>
      <Button text="Edit" isBlack={true} className={styles.modify__button} />
      <Button text="Delete" isBlack={true} className={styles.modify__button} onClick={() => setIsDelete(true)} />
    </div>
  );
};
