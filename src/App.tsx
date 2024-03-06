import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PrivateRoute} from './routes/PrivateRoute';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import ContentDetails from './pages/ContentDetailsPage';

const isAuthenticated = true; // Este valor debería provenir de tu lógica de autenticación

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Home />
          </PrivateRoute>
        }/>
        <Route path="/home" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Home />
          </PrivateRoute>
        }/>
        <Route path="/details" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <ContentDetails />
          </PrivateRoute>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
