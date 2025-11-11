import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"} />;
  }
  return children;
};

export default PrivateRoute;
