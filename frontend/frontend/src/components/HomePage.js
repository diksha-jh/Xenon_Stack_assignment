import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../components/FontAwesomeIcons/index'
import '../style1.css';
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";


export function HomePage() {

    return (
        <>

            <div>
           
                <section className="home">
                    <div className="content">
                        <div className="" style={{ justifyContent: 'center' }}><h1><span style={{ fontSize: '43px', color: 'black' }}> Welcome to&nbsp;</span><span style={{ fontSize: '43px', color: '#ffc800' }}>My</span><span style={{ fontSize: '43px', color: 'black' }}>Metro</span>
                            {/* <span id="span2" style={{fontSize: '43px'}}> </span>  */}
                        </h1></div>
                        <p style={{ fontSize: '25px', marginRight: '20px' }}>
                            <br /> Pune Metro is a planned rapid transit system in the city of Pune, Maharashtra, India. The project is being implemented by the Maharashtra Metro Rail Corporation Limited (Maha-Metro) and is expected to serve the Pune Metropolitan Area.
                            <br />
                        </p>
                       
                        <p />
                        
                    </div>
                    <div className="img">
                        <img src="https://cdn.dribbble.com/users/96166/screenshots/3902697/subway-doors.gif" alt="" />
                    </div>
                </section>
                <div className="container mb-4 " id="product-cards">
                    <h1 className="text-center">Metro Stations</h1>
                    {/* <h1 className="text-center">Our Services </h1> */}
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-center" style={{ fontWeight: 'bold' }}>Line 1</h3>
                                   <h4 > <p className="text-center">PCMC - SWARGATE</p></h4>
                                    <div className="row">
                                        <div className=" stations col-4">
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;PCMC</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Tukaram Nagar</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Bhosari</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Kasarwadi</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Phugewadi</li>
                                        </ul>
                                        </div>
                                        <div className="stations  col-4" >
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Dapoli</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Bopodi</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Khadki</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Range Hill</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Shivaji Nagar</li>
                                        </ul>
                                        </div>
                                        <div className=" stations col-4">
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Civil Court</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Bhudwar</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Mandai</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Swargate</li>
                                        </ul>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="text-center" style={{ fontWeight: 'bold' }}>Line 2</h3>
                                   <h4> <p className="text-center">VANAZ - RAMWADI </p></h4>
                                    <div className="row">
                                        <div className=" stations col-4">
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Vanaz</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Anand Nagar</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Ideal Colony</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Nal Stop</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Garware College</li>
                                        </ul>
                                        </div>
                                        <div className=" stations col-4">
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;DeccanGymkhana</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Sambhaji Park</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Civil Court</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Mangalwar Peth</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Pune Junction</li>
                                        </ul>
                                        </div>
                                        <div className=" stations col-4">
                                        <ul>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Ruby Hall Clinic</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Bund Garden</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Yerawada</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Kalyani Nagar</li>
                                            <li><FontAwesomeIcon icon="fa-solid fa-train-subway" /> &nbsp;Ramwadi</li>
                                        </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                 
                    </div>
                </div>
                <section className="home">
                    <div className="img">
                        <img src="https://cdn.dribbble.com/users/200656/screenshots/3266438/london-tube.gif" alt="" />
                    </div>
                    <div className="content ">
                        <br />
                        <div className="container float-left mb-5 ">
                            <h1 className="mb-5"> <span style={{ fontSize: '43px', color: 'black' }}><span style={{ color: '#ffc800' }}>Pune</span> Metro</span></h1>
                            <p className="me-5" style={{fontSize:'18px'}} >
                                The Pune Metro will have two lines: Line 1 and Line 2. Line 1 will be a 16.589 km elevated corridor with 15 stations from PCMC to Swargate. Line 2 will be a 14.665 km elevated corridor with 16 stations from Vanaz to Ramwadi. Both the lines will intersect at the Shivajinagar station.

                                The Pune Metro is expected to provide a much-needed relief to the city's commuters who are currently dependent on private vehicles and public buses. It will also help in reducing the traffic congestion and air pollution in the city.

                                The construction of the Pune Metro is currently underway and the project is expected to be completed by 2023.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container mb-5 " id="cont1">
                    <h1 className="text-center">Facilities</h1>
                    <div className="row">
                        <div className="col">
                            <h2><FontAwesomeIcon icon="fa-solid fa-person-dress" />&nbsp;  Facilities for Women passengers </h2>
                            <div className="container">
                                <p>First coach of every train reserved for women passengers.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <h2><FontAwesomeIcon icon="fa-solid fa-crutch" />&nbsp;Facilities for Divyangjan
                            </h2>
                            <div className="container">
                                <p>Extra Wide Automatic flap gates for wheelchairs
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <h2><FontAwesomeIcon icon="fa-solid fa-parking" />&nbsp;
                                Parking Facilities
                            </h2>
                            <div className="container">
                                <p>Parking facility available at metro stations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mb-5" id="cont1">
                    <div className="row">
                        <div className="col">
                            <h2><FontAwesomeIcon icon="fa-solid fa-phone" />    &nbsp;
                                Customer Care Office
                            </h2>
                            <div className="container">
                                <p>All stations will have Customer Care office to assist the passengers for all their travel issues.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <h2><FontAwesomeIcon icon="fa-solid fa-ticket" />&nbsp;
                                Ticket Counters
                            </h2>
                            <div className="container">
                                <p>Ticket counters are available at concourse level of all the stations.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <h2> <FontAwesomeIcon icon="fa-solid fa-camera" />&nbsp;Security Check Point
                            </h2>
                            <div className="container">
                                <p>Security check points to detect and neutralise threat to Passengers and Station property.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>







        </>












    );

};
