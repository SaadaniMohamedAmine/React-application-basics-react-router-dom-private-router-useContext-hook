import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile";
import AuthContext from "../hooks/authContext";

const PrivateRoute = () => {
  const auth = useContext(AuthContext);
  return auth.status ? <Profile /> : <Navigate to="/login" />;
};

export default PrivateRoute;
