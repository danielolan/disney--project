import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import LoginPage from "../pages/LoginPage.1";
import Home from "../pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "../pages/HomePage";
import ContentDetailsPage from "../pages/ContentDetailsPage";

const auth = false;

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute auth={auth}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute auth={auth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute auth={auth}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/category/:categoryId"
          element={
            <PrivateRoute auth={auth}>
              <ContentDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/details"
          element={
            <PrivateRoute auth={auth}>
              <ContentDetailsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
