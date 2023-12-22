import styles from "./SignUp.module.scss";
import Avatar from "img/svg/avatar.svg";

export const SignUp: React.FC = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.signUp__form}>
        <div className={styles.signUp__name}>Sign up</div>
        <div className={styles.signUp__picture}>
          <img src={Avatar} alt="avatar" />
          <div>Choose picture</div>
        </div>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <label className={styles.signUp__status}>
          <input type="checkbox" />
          <div className={styles.signUp__text}>Admin</div>
        </label>
        <button>Sign Up</button>
        <div className={styles.signUp__text}>
          Have an account? <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};
