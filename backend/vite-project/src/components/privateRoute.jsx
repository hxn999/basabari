import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('user')
    let authed = false
    if(token){
        authed=true
    }
    return authed ? children  : <Navigate to="/login" />;
};
