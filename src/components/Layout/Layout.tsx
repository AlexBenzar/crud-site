import styles from "./Layout.module.scss";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { logOut } from "store/slices/userSlice";
import Cookies from "universal-cookie";
import { useProfilesQuery } from "store/slices/authSlice";
import Avatar from "img/svg/avatar.svg";
import Profiles from "img/svg/profiles.svg";
import Users from "img/svg/users.svg";
import Dashboard from "img/svg/dashboard.svg";

export const Layout: React.FC = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useProfilesQuery();
  function logOutHandler() {
    dispatch(logOut());
    if (cookies.get("token")) {
      cookies.remove("token");
    }
    navigate("/");
  }
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar__profile}>
            <div className={styles.sidebar__img}>
              <img src={data.picture ?? Avatar} alt="profile pic" />
            </div>
            <div className={styles.sidebar__username}>{data.username}</div>
          </div>
          <div className={styles.sidebar__links}>
            <Link to="/profiles">
              <img src={Profiles} />
              Profiles
            </Link>
            {data.role == "admin" && (
              <>
                <Link to="/profiles">
                  <img src={Users} />
                  Users
                </Link>
                <Link to="/profiles">
                  <img src={Dashboard} />
                  Dashboard
                </Link>
              </>
            )}
          </div>
          <div className={styles.sidebar__button}>
            <button onClick={logOutHandler}>Log out</button>
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
};
