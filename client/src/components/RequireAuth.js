import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RequireAuth(props) {
  const { auth } = useAuth(props.roles);

  return <>{auth && auth !== null ? <Outlet /> : <Outlet />}</>;
}

export default RequireAuth;
