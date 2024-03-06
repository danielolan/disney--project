import React from "react";
import { Navigate, Route } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Navigate to="/login" replace />
  );
};
