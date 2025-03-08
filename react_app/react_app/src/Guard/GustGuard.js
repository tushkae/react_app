import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { MOVIES_PAGE } from "../constants/routes";
import { Navigate } from "react-router-dom";

const GustGuard = ({ children }) => {
  const {
    state: { isAuthenticated },
  } = useAuthContext();

  return <>{isAuthenticated ? <Navigate to={MOVIES_PAGE} /> : children}</>;
};

export default GustGuard;
