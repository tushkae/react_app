import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { LANDING_PAGE } from "../constants/routes";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <Navigate to={LANDING_PAGE} />
      )}
    </>
  );
};

export default AuthGuard;
