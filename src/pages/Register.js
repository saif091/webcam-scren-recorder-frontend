import React,{useState} from "react";
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom";
import {useCookies} from 'react-cookie'
import Header from "../components/Header";
import Footer from "../components/Footer";
const Register = () =>{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setcPassword] = useState("");
    console.log(username)
    const onSubmit = async(e) =>{
        e.preventDefault();
        if (cpassword === password){
            try {
                await axios.post("https://mern-rec-api.onrender.com/auth/register",{username,password})
                alert("Registration Succesfuul")
            }catch (error){
                console.log(error)
            }
        }
        else {
            alert("Password does not match")
        }

    }
    return (
      <>
      <Header/>
        <form  onSubmit={onSubmit} className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius:"1rem"}} >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter your UserName and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="text" id="username"  placeholder="Username" className="form-control form-control-lg" value={username} onChange={(e)=>{
                    setUsername(e.target.value)
                }} />
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="password" placeholder="password" className="form-control form-control-lg" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" placeholder = "Confirm Password" value={cpassword} className="form-control form-control-lg" onChange={(e)=>{
                    setcPassword(e.target.value)
                }} />
              </div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

         

            </div>

            <div>
              <p className="mb-0">already a member!<Link to="/auth/login" className="text-white-50 fw-bold">Login</Link>
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
export default Register
