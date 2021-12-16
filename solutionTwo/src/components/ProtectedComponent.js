import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  //redux
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { userReducer } = state;
  const { isLoggedIn } = userReducer;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
