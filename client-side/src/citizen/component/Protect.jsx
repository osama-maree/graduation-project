import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
export const Protect = (props) => {
  const { role } = useSelector((state) => state.data);
  const location = useLocation();
  // console.log(props.role.includes(role));
  if (!props.role.includes(role)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
};
