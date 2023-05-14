import { Component } from "react";

import '../style1.css';
import { Link } from "react-router-dom";



export function Footer(){
  
        return (
          <div>
          <footer id="footer" style={{backgroundColor: 'black'}}>
          <div className="footer-top" style={{backgroundColor: 'black'}}>
            <div className="container">
              <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact "  >
                  {/* <h3>My Metro</h3> */}
                  <h3 style={{fontWeight:'bold' , color:'white'}} > &nbsp;&nbsp;<span  style={{color:'#ffc800'}} >My</span>Metro</h3>
                  <p  className=""  style={{textAlign:'justify'}}>
                  Pune Metro is a mass rapid transit system serving the city of Pune, India.with objective of "To provide safe, stress free and reliable public transport using an eco-friendly, most advanced technology of mass transit while delivering superlative intercity travel experience at an affordable pricing."
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links" >
                  <h3>Useful Links</h3>
                  <ul className="float-center">
                    <li><Link to={"/"} >Home</Link></li>
                    <li><Link to={"/Fare"} >Fare</Link></li>
                    <li><Link to={"/Aboutus"} >About us</Link></li>
                    <li><Link to={"/Booking"} >Book Now</Link></li>
                  </ul>
                </div>
                
                <div className="col-lg-3 col-md-6 mt-2 footer-contact"  >
                  <h3>Contact Us</h3>
                  <p  >
                    {/* Pune */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-house"/>&nbsp; */}
                    Koregoan Park <br></br>Pune-411001<br />
                    India <br />
                  </p>
                  {/* <strong>Phone:</strong> +123456789 <br /> */}
                  <strong></strong> +9845617560 <br />
                  {/* <strong>Email:</strong> mymetro@gmail.com <br /> */}
                  <strong>&nbsp;</strong> mymetro@gmail.com <br />
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h3>Our Social Networks</h3>
                  <p>Connect with us ....</p>
                  <div className="socail-links mt-3">
                  <a href="https://twitter.com/metrorailpune?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target={"_blank"}></a>
                    <a href="https://www.instagram.com/metrorailpune/?hl=en" target={"_blank"} ></a>
                    
                    <a href="https://www.linkedin.com/company/credaipunemetro/?originalSubdomain=in" target={"_blank"}></a>
                    <a href="https://www.facebook.com/MetroRailPune/" target={"_blank"} ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>My Metro</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
        </div>
        );

    };
