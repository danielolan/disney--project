import { Navigate } from "react-router-dom";

export function PublicRoute({
  children,
  auth,
}: {
  children: JSX.Element;
  auth: boolean;
}) {
  if (auth) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
