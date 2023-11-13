import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate, Outlet } from "react-router-dom";
const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    setAuth({});
    try {
      await axios(`${process.env.REACT_APP_API_URL}/admin/logout`, {
        method: "POST",
        withCredentials: true,
      }).then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("isAuthenticated");
          window.location.href = `${process.env.REACT_APP_URL_DEV}/Login`;
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
