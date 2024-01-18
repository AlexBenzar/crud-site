import { Button } from "common/index";
import styles from "./ProfileCard.module.scss";
import { ModifyCardType } from "types/index";

export const ModifyCard: React.FC<ModifyCardType> = ({ isHover, setIsDelete, setIsEdit }) => {
  return (
    <div className={`${styles.modify} ${!isHover && styles.modify__hide}`}>
      <Button text="Edit" isBlack={true} className={styles.modify__button} onClick={() => setIsEdit(true)} />
      <Button text="Delete" isBlack={true} className={styles.modify__button} onClick={() => setIsDelete(true)} />
    </div>
  );
};
