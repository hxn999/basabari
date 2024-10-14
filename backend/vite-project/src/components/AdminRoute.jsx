import { Navigate } from "react-router-dom";


export const AdminRoute = ({ children }) => {
    const admin = localStorage.getItem(import.meta.env.VITE_REACT_APP_LOCAL_ADMIN)
    let authed = false
    if(admin){
        authed=true
    }
    return authed ? children  : <Navigate to={`/admin${import.meta.env.VITE_REACT_APP_ADMIN_URL}/login`} />;
};
