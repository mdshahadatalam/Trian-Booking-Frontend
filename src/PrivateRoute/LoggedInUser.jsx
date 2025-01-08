import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Login } from "../Pages/Login";

 export default function(){
    const user = useSelector((user)=> user.login.logged);
    return user ? <Outlet/> : <Login/>
}