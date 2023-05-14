
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/FontAwesomeIcons/index'




export function Navbar() {
 
  let navigate=useNavigate();

  

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"} style={{fontWeight:'bold'}}><FontAwesomeIcon icon="fa-solid fa-train-subway" />&nbsp;&nbsp;<span  style={{color:'#ffc800'}} >My</span>Metro </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse text-white " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link" to={"/Aboutus"}>Aboutus</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Contact"}>Contact Us</Link>
              </li>
             
            </ul>
            
            <div className="icons" id="icon1">
              
            <div className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/Register"}>Register</Link>
              </div>
        
              <div className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </div>
              
            </div>
           
            <div className="mt-3"><FontAwesomeIcon onClick={()=>{localStorage.clear("USER_DATA");alert("Logged Out");navigate("/")}}  style={{width:'20px',height:'20px'}} icon="fa-solid fa-power-off" /></div>
              
          </div>
          
        </div>
      </nav>



    </>

  )
}
