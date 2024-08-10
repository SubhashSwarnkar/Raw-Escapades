// src/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { auth } = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (role && auth.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
