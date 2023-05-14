import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from './Services';
import Swal from 'sweetalert2';
export default function Login(){
    localStorage.clear();
    const [email, setEmail] = useState("");
  const [pass,setPassword] = useState("");
  const[errmsg,seterror]=useState("")
  const navigate=useNavigate();

  const UserData = {
    
    "email": email,
    "pass":pass
    
  };


  const verify = async (event) => {
    event.preventDefault();
    console.log("User Logged In:", UserData);
    const response = await loginUser(UserData);
    console.log(response.data);
    // Perform login logic here
    localStorage.setItem("USER_DATA", response.data.email);
   
    if(response.data.email!=UserData.email){
        Swal.fire(
            "Enter valid details",
            "Create an account if you have not created !!",
            "error"
          );
      //seterror("Wrong Email or password");
      
    }
    else{
      if(response.data.email===UserData.email)
      {
        Swal.fire(
            "Login SuccesFully",
            "Thank You Visting the website",
            "success"
          );
       navigate("/");
      }
    
    }
    
    
    
  };
    return(
        <div className='newlogin'>
      <section className="">
        <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center h-100  w-75" style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div className="shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="p-5 text-center">
                  <h3 className="mb-5">Log in</h3>
                  <form action name="myForm1" onSubmit={verify}>
                    <div className="form-outline mb-4">
                      <input type="email" id="uname" name='emailId' onChange={(event) => setEmail(event.target.value)} className="form-control form-control-lg" required  placeholder='Enter your Email'/>
                      {/* <label className="form-label" id="formerror1" htmlFor="typeEmailX-2">Email</label> */}
                    </div>
                    <div className="form-outline mb-4" id="pass1">
                      <input type="password" name="password" id="pass12" onChange={(event) => setPassword(event.target.value)} className="form-control form-control-lg" required placeholder='Enter your password' />
                      <br></br>
                      <span  style={{color: 'red'}}>{errmsg}</span>
                    </div>
                    
                      <button type="submit" className="btn btn-primary btn-lg btn-block mt-4" >Login</button><br></br>

                      <span className="small fw-bold mt-2 pt-1 mb-0 ">Don't have an account? <Link to={"/Register"}>Register</Link></span>
                  </form>
                  <hr className="my-4" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

