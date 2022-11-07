import React from "react";
import { Navigate ,Outlet} from "react-router-dom";


export default function PrivateRoute() {
const isAuth = localStorage.getItem("token");
return isAuth ? <Outlet /> : <Navigate to="/login"/>;
}
