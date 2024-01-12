import styles from "./Users.module.scss";
import { UsersList } from "modules/index";

export const Users: React.FC = () => {
  return (
    <div className={styles.users}>
      <UsersList />
    </div>
  );
};
