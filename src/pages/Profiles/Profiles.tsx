import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/hooks";
import { logOut } from "store/slices/userSlice";
import Cookies from "universal-cookie";

export const Profiles: React.FC = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function logOutHandler() {
    dispatch(logOut());
    if (cookies.get("token")) {
      cookies.remove("token");
    }
    navigate("/");
  }
  return (
    <>
      <h1>Your Profiles</h1>
      <button onClick={logOutHandler}>Log out</button>
    </>
  );
};
