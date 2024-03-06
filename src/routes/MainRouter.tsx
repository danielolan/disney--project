import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";

import Home from "../pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "../pages/HomePage";
import ContentDetailsPage from "../pages/ContentDetailsPage";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";



export const MainRouter = () => {
  const {  user } = useSelector((state: RootState) => state.auth);
  const [isAuth, setIsAuth] = useState(!!user);
  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute auth={isAuth}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute auth={isAuth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute auth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <PrivateRoute auth={isAuth}>
              <ContentDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/details"
          element={
            <PrivateRoute auth={isAuth}>
              <ContentDetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
