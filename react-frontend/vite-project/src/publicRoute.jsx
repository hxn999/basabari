import { Navigate } from "react-router-dom";


export const PublicRoute = ({ children }) => {
    const user = localStorage.getItem('user')
    let authenticated = false
    if(user){
        authenticated=true
    }
    return !authenticated ? children  : <Navigate to="/" />;
};
