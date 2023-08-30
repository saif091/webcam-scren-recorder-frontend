import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:4001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit} className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{borderRadius:"1rem"}} >
            <div className="card-body p-5 text-center">
  
              <div className="mb-md-5 mt-md-4 pb-5">
  
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your UserName and password!</p>
  
                <div className="form-outline form-white mb-4">
                  <input type="username" id="typeEmailX" placeholder="username"  value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                    
                  }}className="form-control form-control-lg" />
                </div>
  
                <div className="form-outline form-white mb-4">
                  <input type="password" id="typePasswordX" placeholder="password" onChange={(e)=>{
                    setPassword(e.target.value)}}
                    className="form-control form-control-lg" />
                </div>
               
  
                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
  
              </div>
  
              <div>
                <p className="mb-0">Don't have an account? <Link to='/auth/register' className="text-white-50 fw-bold">Sign Up</Link>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <Footer/>
  </>
  )
}

export default Login