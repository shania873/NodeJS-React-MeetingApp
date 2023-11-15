import { useState, useEffect, useContext } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
const useAuth = (currentRoles) => {
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  let location = useLocation();

  useEffect(() => {
    if (context.persist && location.pathname === "/") {
      navigate("/Home");
    }

    if (context.persist === false && location.pathname === "/") {
      navigate("/Login");
    }

    const authenticateUser = async () => {
      try {
        const token = await axios.get(
          `${process.env.REACT_APP_API_URL}/refresh/refreshToken`,
          {
            withCredentials: true,
          }
        );
        console.log(token);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/getUser`,
          {
            headers: { Authorization: `Bearer ${token.data.token}` },
            withCredentials: true,
          }
        );

        // Guard if user is not authorized

        if (
          context.persist === true &&
          currentRoles !== undefined &&
          currentRoles.length > 0 &&
          !currentRoles?.includes(response?.data?.roleNames[0].toString())
        ) {
          navigate("/unauthorized");
        }

        setAuth((prev) => {
          return {
            ...prev,
            roles: response.data.roleNames,
            accessToken: response.data.credentials,
            idUser: response.data.user.id,
            user: response.data.user,
          };
        });
      } catch (error) {
        setAuth(null);
      }
    };

    authenticateUser();
  }, []);

  return { auth, setAuth };
};

export default useAuth;
