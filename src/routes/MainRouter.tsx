import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";

import Home from "../pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "../pages/HomePage";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import LoginPage from "../pages/LoginPage";
import ContentCategoryPage from "../pages/ContentCategoryPage";
import ContentDetailsPage from "../pages/ContentDetailsPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

export const MainRouter = () => {
  const { user } = useSelector((state: RootState) => state.auth);
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
          path="/"
          index
          element={
            <PrivateRoute auth={isAuth}>
              <Home />
            </PrivateRoute>
          }
        />

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
          path="/contact"
          element={
            <PrivateRoute auth={isAuth}>
              <ContactPage />
            </PrivateRoute>
          }
        />
         <Route
          path="/about"
          element={
            <PrivateRoute auth={isAuth}>
              <AboutPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/details/:categoryId/:movieId"
          element={
            <PrivateRoute auth={isAuth}>
             <ContentDetailsPage/>
            </PrivateRoute>
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <PrivateRoute auth={isAuth}>
              <ContentCategoryPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
