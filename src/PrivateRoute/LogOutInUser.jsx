import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

 export default function(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Navigate to={'/'}/> :  <Outlet/>
}