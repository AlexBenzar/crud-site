import styles from "./Layout.module.scss";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { logOut } from "store/slices/userSlice";
import Cookies from "universal-cookie";
import { useProfilesQuery } from "store/slices/authSlice";
import { Avatar, Dashboard, Profiles, Users } from "img";
import { Loader, Typography } from "common/index";

export const Layout: React.FC = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useProfilesQuery("");
  function logOutHandler() {
    dispatch(logOut());
    if (cookies.get("token")) {
      cookies.remove("token");
    }
    navigate("/");
  }

  if (isLoading || isFetching) {
    return <Loader />;
  }
  return data ? (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__profile}>
          <div className={styles.sidebar__img}>
            <img src={data.picture ?? Avatar} alt="profile pic" />
          </div>
          <div className={styles.sidebar__username}>{data.username}</div>
        </div>
        <div className={styles.sidebar__links}>
          <NavLink to="/profiles">
            <img src={Profiles} />
            Profiles
          </NavLink>
          {data.role === "admin" && (
            <>
              <NavLink to="/users">
                <img src={Users} />
                Users
              </NavLink>
              <NavLink to="/dashboard">
                <img src={Dashboard} />
                Dashboard
              </NavLink>
            </>
          )}
        </div>
        <div className={styles.sidebar__button}>
          <button onClick={logOutHandler}>Log out</button>
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Typography variant="error-1">Error occur</Typography>
  );
};
