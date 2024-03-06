import { Navigate } from "react-router-dom";

export function PrivateRoute({
  children,
  auth,
}: {
  children: JSX.Element;
  auth: boolean;
}) {
  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
