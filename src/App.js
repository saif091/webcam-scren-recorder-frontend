import React from "react";
import Header from "./components/Header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ScreenRecord from "./pages/ScreenRecord";
import { Webcam } from "./pages/Webcam";
import ProtectedRoutes from "./ProtectedRoutes";
import { Cookies, useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  return (

    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }/>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<register/>}/>

      
        <Route path="/screenrecorder" element= {!cookies.access_token?(
          <Login/>            
          ):(
            <ScreenRecord/>
            )} />
     <Route path="/webcam" element= {!cookies.access_token?(
          <Login/>            
          ):(
            <Webcam/>
            )} />
    </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
