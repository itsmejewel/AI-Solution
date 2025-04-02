// src/config/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser; // Get the current user (admin)

  if (!user) {
    // If the user is not authenticated, redirect to the sign-in page
    return <Navigate to="/admin" replace />;
  }

  // If the user is authenticated, render the protected route
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;

