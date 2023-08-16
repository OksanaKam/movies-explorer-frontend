import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

const ClosedRouteElement = ({ isLoggedIn }) => {
    return (
        !isLoggedIn ? <Outlet /> : <Navigate to="/" replace />
)}

export default ClosedRouteElement;
