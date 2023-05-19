import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute