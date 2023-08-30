import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';
const Header = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout =()=>{
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth/login");
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item">
        
        </li>
        <li className="nav-item">
          <Link to='/webcam' className="nav-link" >WebCam</Link>
        </li>
        <li className="nav-item">
          <Link to="/screenrecorder" className="nav-link" >ScreenRecorder</Link>
        </li>
      </ul>
      <form className="d-flex gap-2" role="search">
        {!cookies.access_token?(
            <Link to='/auth/login' ><button className="btn btn-success" >Login</button></Link>
            
          ):(
            <button className="btn btn-success" onClick={logout} >Logout</button>
            )}
                {!cookies.access_token?(
            <Link className="nav-link"to='/auth/login' ><button className="btn btn-success" >Register</button></Link>
            
          ):(null
            )}
      </form>
    </div>
  </div>
</nav>
<Outlet/>
</>
  )
}

export default Header;