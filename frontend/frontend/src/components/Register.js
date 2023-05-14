import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { regUser, saveUser } from "./Services";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  
let navigate=useNavigate();
  const[values,setValues]=useState({
    fname:"",
    lname:"",
    email:"",
    mobileNo:"",
    
    pass:"" 

  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    // localStorage.setItem("REGISTER_DATA", JSON.stringify(values));
    // let response;
    const response = await regUser(values);
    console.log(response.data);
    if(response.data=="Registered")
    {
        Swal.fire(
            "Registered successfully",
            "Thank You for registering",
            "success"
          );
      navigate("/login")
      
    } else {
      Swal.fire(
        "User Already Exist",
        "Kindly Register new Email",
        "error"
      );
    }

  };


  
     
 

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value});
  };
  return (
    <div className="newregister align-items-center">
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className=" g-0">
            <div className="row d-flex justify-content-center">
              <div
                className="col-8  registercard cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className=" p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <form
                    className="form1"
                    name="myForm"
                    onSubmit={handleSubmit}
                  >
                    <div
                      className="formdesign row form-outline mb-4 d-flex justify-content-center"
                      id="fname"
                    >
                      <div className="col-3">First Name:</div>
                      <div className="col-3">
                        <input
                          type="text"
                          name="fname"
                          className=""
                          //onChange={(event) => setName(event.target.value)}
                          onChange={onChange}
                          placeholder={"Enter First Name"}
                          pattern="[A-Za-z]{2,25}"
                          required
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                            height: "30px",
                            width: "200px",
                          }}
                        />
                        <b>
                          <span className="formerror"></span>
                        </b>
                      </div>
                    </div>

                    <div
                      className="formdesign row form-outline mb-4 d-flex justify-content-center"
                      id="lname"
                    >
                      <div className="col-3">Last Name:</div>
                      <div className="col-3">
                        <input
                          type="text"
                          name="lname"
                          className=""
                          //onChange={(event) => setName(event.target.value)}
                          onChange={onChange}
                          placeholder={"Enter Last Name"}
                          pattern="[A-Za-z]{3,25}"
                          required
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                            height: "30px",
                            width: "200px",
                          }}
                        />
                        <b>
                          <span className="formerror"></span>
                        </b>
                      </div>
                    </div>
                    
                    <div
                      className="formdesign row form-outline mb-4 d-flex justify-content-center"
                      id="email"
                    >
                      <div className="col-3">Email:</div>
                      <div className="col-3">
                        <input
                          type="email"
                          name="email"
                        //  onChange={(event) => setEmail(event.target.value)}
                        onChange={onChange}
                          placeholder={"Enter valid EmailId"}
                          required
                          pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]]"
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                            height: "30px",
                            width: "200px",
                          }}
                        />
                        <b>
                          <span className="formerror"> </span>
                        </b>
                      </div>
                    </div>
                    <div
                      className="formdesign row form-outline mb-4 d-flex justify-content-center"
                      id="phone"
                    >
                      <div className="col-3">MobileNo:</div>
                      <div className="col-3">
                        <input
                          type="text"
                          name="mobileNo"
                          //onChange={(event) => setMobileNo(event.target.value)}
                          onChange={onChange}
                          placeholder={"Enter MobileNo starting with 6-9"}
                          required
                          pattern="[6-9]{1}[0-9]{9}"
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                            height: "30px",
                            width: "200px",
                          }}
                        />
                        <b>
                          <span className="formerror" />
                        </b>
                      </div>
                    </div>
         

                    <div
                      className="formdesign row form-outline mb-4 d-flex justify-content-center"
                      id="pass"
                    >
                      <div className="col-3">Password:</div>
                      <div className="col-3">
                        <input
                          type="password"
                          id="password"
                          name="pass"
                         // onChange={(event) => setPassword(event.target.value)}
                         onChange={onChange}
                          placeholder={"Enter Password"}
                          minLength={5}
                          required
                          style={{
                            border: "1px solid",
                            borderRadius: "5px",
                            height: "30px",
                            width: "200px",
                          }}
                        />
                        <b>
                          <span className="formerror" />
                        </b>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <input
                        className="btn btn-primary"
                        type="submit"
                        defaultValue="Submit"
                      />
                    </div>
                    <span
                      className="small fw-bold mt-2 pt-1 mb-0"
                      style={{ justifyContent: "center" }}
                    >
                      Already have an Account?{" "}
                      <Link to={"/login"}> Login</Link>
                    </span>
                    <div></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 ">
              <img
                src="images/signupimg.webp"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
 }

                      
