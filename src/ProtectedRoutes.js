
import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';
const ProtectedRoutes = async()=>{
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
        if (await cookies.access_token){
            <Outlet/>
        }
        else{
            navigate('/auth/login')
        }

    }
ProtectedRoutes()

export default ProtectedRoutes