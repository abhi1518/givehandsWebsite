import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./HomePage.css";
import cardPhoto from "../../assets/cardPhoto.png";
import sayingAbout from "../../assets/sayingAbout.png";
import logo from "../../assets/logo1.png";
import facebook from "../../assets/facebook.png";
import twiter from "../../assets/twiter.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import navbarLogo from "../../assets/navbarLogo.png";
import donateButton from "../../assets/donateButton.png";
import programDetailsButton from "../../assets/programDetailsButton.png";
import search from "../../assets/search.png"
import string from "../../assets/string.png";
import sayingAboutbg from "../../assets/sayingAboutbg.png"
import { Link } from "react-router-dom";
import children from "../../assets/children.png";
import education from "../../assets/education.png";
import elder from "../../assets/elderly.png";
import emergency from "../../assets/emergency.png";
import nonprofit from "../../assets/nonProfit.png";
import other from "../../assets/others.png";
import women from "../../assets/women.png";
import medical from "../../assets/medical.png";
import mobileTestimonial from "../../assets/mobileTestomonial.png";
import desktopTestomanial from "../../assets/desktopTestomonial.png";

function HomePage() {
  return (
    <>
      <div className='desktop_view'>
        {/* banner */}
        <div className="background-banner-image">
          <div className='pt-4'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light stiky" style={{ margin: "0% 15%", borderRadius: "40px" }}>
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <Link to="#"><img src={navbarLogo} alt="Description of the image" style={{ height: "20px" }} /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item active">
                    <Link className="nav-link navLink" to="#">Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link navLink" to="#">Donate</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link navLink" to="#">Pricing</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link navLink" to="#">Contact</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link navLink" to="sign_in">SignIn</Link>
                  </li>

                </ul>
              </div>
              <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
            </nav>
          </div>
          <div style={{ marginTop: "11%", marginLeft: "8%" }}>
            <h2 style={{ color: "#56D1A7", fontFamily: "Trebuchet MS", lineHeight: "47px", fontSize: "40px", fontWeight: "600" }}>Give<span style={{ color: "#fff", fontFamily: "Trebuchet MS", lineHeight: "47px", fontSize: "40px", fontWeight: "600" }}>hands</span></h2>
            <h4 style={{ color: "#fff", fontFamily: "Trebuchet MS", lineHeight: "30px", fontSize: "30px", fontWeight: "500" }}>Join us in making a difference</h4>
            <p style={{ color: "#fff", fontFamily: "Trebuchet MS", lineHeight: "22px", fontSize: "18px", fontWeight: "400" }}>Together, we can create change -<br />Raise funds online for medical emergencies and social causes</p>
            <button type="submit" style={{ width: "22%", color: "#fff", backgroundColor: "#56D1A7", fontSize: "20px", fontFamily: "Lato", fontWeight: "500", marginTop: "15px", borderRadius: "35px" }} class="btn">Start a fundraise</button>
          </div>
        </div>
        {/* search catagory  */}
        <div className='container-fluid text-center' >
          <h1 className='mt-5 mb-5' style={{ fontFamily: 'Trebuchet MS', fontSize: '40px', fontWeight: 400, lineHeight: '33px', textAlign: 'center' }}>Together, We Can Create Change - <span style={{ fontFamily: 'Trebuchet MS', fontSize: '40px', fontWeight: 700, lineHeight: '33px', textAlign: 'center', color: '#56D1A7' }}>Let's Begin Today.</span></h1>
          <div class="input-group" style={{ margin: "0px 16%", width: "67%", height: "40px", border: "1px solid #56D1A7", borderRadius: '10px' }}>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Search by fundraiser name, title, location, cause or other keywords" />
            <div class="input-group-append" style={{ backgroundColor: "#56D1A7" }}>
              <span class="input-group-text" style={{ backgroundColor: "#56D1A7", width: "9%" }}>
                <i class="fas fa-search" style={{ color: "#fff" }}></i>
              </span>
            </div>
          </div>

          <div className='mt-4 mb-3'>
            <img className='mx-3' src={medical} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={education} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={nonprofit} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={emergency} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={children} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={women} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={elder} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={other} alt="icon" style={{ width: "6%" }} />
          </div>
        </div>
        {/* Donate to Medical */}
        <div className='container-fluid'>
          <div style={{ display: "flex", justifyContent: "space-between", margin: "50px 110px" }}>
            <h1 style={{ fontSize: "28px", lineHeight: "28px", fontFamily: "Lato", fontWeight: "400", color: "#002140" }}>Donate To Medical Fundraising Around The World </h1>
            <button type="submit" style={{ width: "18%", color: "#fff", backgroundColor: "#56D1A7", fontSize: "20px", fontFamily: "Lato", fontWeight: "500", marginTop: "15px", borderRadius: "35px" }} class="btn">View All Campaigns</button>
          </div>
          {/* Card */}
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-sm-12'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-12 mx-5'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-12'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center mt-5 pt-4'>
            <div className='col-lg-3 col-sm-12'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-12 mx-5'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-sm-12'>
              <div className="shadow card" style={{ width: "23rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "35px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "90px", backgroundImage: `url(${desktopTestomanial})` }}>
          <p className='text-center' style={{ fontWeight: "300", fontSize: "40px", lineHeight: "33px", color: "#002140" }}>What people are saying about <span style={{ color: "#56D1A7" }}>Givehands</span> </p>
          <img className="text-white" src={desktopTestomanial} alt="Description of the image" style={{ height: "480px", width: "100%" }} />
        </div>
        <div className="background-care-image" style={{ marginTop: "90px", marginBottom: "80px" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-sm-12'>
                <h6 style={{ color: "#56D1A7", lineHeight: "20px", fontSize: "16px", fontFamily: "Lato", fontWeight: "600", marginTop: "100px" }}>CALL TO ACTION</h6>
                <h2 style={{ marginTop: "20px", color: "#fff", fontFamily: "Rozha One", fontWeight: "400", fontSize: "50px", lineHeight: "50px" }}>Fundraising For The <br />People And Causes You <br />Care About</h2>
                <p style={{ marginTop: "15px", color: "#fff", fontFamily: "Lato", fontWeight: "400", fontSize: "14px", lineHeight: "22px" }}>Our passion is fueled by the faces we meet, the stories we <br />hear, and the communities we serve. We believe in the <br />transformative power.</p>
              </div>
              <div className='col-lg-6 col-sm-12'>
                <div className='shadow requestForm' >
                  <form>
                    <div class="form-group">
                      <input type="text" class="form-control requestFormInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control requestFormInput" id="exampleInputPassword1" placeholder="Enter Email" />
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control requestFormInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone No." />
                    </div>
                    <button type="submit" style={{ width: "40%", color: "#fff", backgroundColor: "#56D1A7", fontSize: "20px", fontFamily: "Lato", fontWeight: "700", marginTop: "15px", borderRadius: "35px" }} class="btn">Request a call</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center'>
          <img src={string} alt="Description of the image"
            style={{ height: "30px" }} />
          <p style={{ fontFamily: "Lato", fontSize: "30px", lineHeight: "40px", fontWeight: "300", marginTop: "30px", marginBottom: "60px" }}>If we all do something, then together there is no problem <br />that we cannot solve!</p>
        </div>
        {/* Footer */}
        <div style={{ backgroundColor: "black", height: "150px" }}>
          <div className="container">
            <div className="row pt-5">
              <div className="col-3">
                <Link to="#"><img src={logo} alt="Description of the image"
                  style={{ height: "25%" }} /></Link>
                <p style={{ color: "#fff", fontFamily: "Lato", fontSize: "12px", lineHeight: "20px", fontWeight: "400" }}>Join Us in Making a Difference</p>
              </div>
              <div className="col-6">
                <div className="mx-auto" style={{ display: "flex" }}>
                  <h6 className="text-white pr-5">Home</h6>
                  <h6 className="text-white pr-5 pl-2">Donate</h6>
                  <h6 className="text-white pr-5 pl-2">Pricing</h6>
                  <h6 className="text-white pl-2">Contact</h6>
                </div>
                <div className="mx-auto mt-3" style={{ display: "flex" }}>
                  <Link to=""><img className="text-white pr-5 pl-1" src={facebook} alt="Description of the image" style={{ height: "30px" }} /></Link>
                  <Link to=""><img className="text-white pr-5 pl-4" src={telegram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                  <Link to=""><img className="text-white pr-5 pl-5" src={instagram} alt="Description of the image" style={{ height: "30px" }} /></Link>
                  <Link to=""><img className="text-white pl-5" src={twiter} alt="Description of the image" style={{ height: "30px" }} /></Link>
                </div>
              </div>
              <div className="col-3" style={{ height: "50px" }}>
                <p className="text-white" style={{ fontSize: "12px" }}>+234 80 234 3432</p>
                <p className="text-white" style={{ fontSize: "12px" }}>givehands@hope.com</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <hr className="horizantal_line mb-4" />
          <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 15% 0px 4%" }}>
            <div>
              <p className="text-white mt-3" style={{ fontSize: "12px" }}>© 2023 Givehands. All right reserved.</p>
            </div>
            <div style={{ display: "block" }}>
              <Link to="#" style={{ fontSize: "12px" }} className="text-white mt-3 mx-4">Privacy Policy</Link>
              <Link to="#" style={{ fontSize: "12px" }} className="text-white mt-3">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_view'>
        {/* banner */}
        <div className="background-mobile-banner-image">
          <div style={{ paddingTop: "65%" }}>
            <h2 className='px-4' style={{ color: "#56D1A7", fontFamily: "Trebuchet MS", lineHeight: "32px", fontSize: "32px", fontWeight: "600" }}>Give<span style={{ color: "#fff", fontFamily: "Trebuchet MS", fontWeight: "600" }}>hands</span></h2>
            <h4 className='px-4 pt-2' style={{ color: "#fff", fontFamily: "Trebuchet MS", lineHeight: "22px", fontSize: "22px", fontWeight: "700" }}>Join us in making a difference</h4>
            <p className='px-4 pt-2' style={{ color: "#fff", fontFamily: "Trebuchet MS", lineHeight: "19px", fontSize: "14px", fontWeight: "400" }}>Together, we can create change -<br />Raise funds online for medical emergencies and <br />social causes</p>
            <button type="submit" style={{ width: "48%", color: "#fff", backgroundColor: "#56D1A7", fontSize: "16px", fontFamily: "Lato", fontWeight: "500", borderRadius: "35px" }} className="btn mx-4 mt-2">Start a fundraise</button>
          </div>
        </div>
        <div className='container-fluid text-center' >
          <h1 className='mt-5 mb-5' style={{ fontFamily: 'Trebuchet MS', fontSize: '20px', fontWeight: 400, lineHeight: '33px', textAlign: 'center' }}>Together, We Can Create Change <br />- <span style={{ fontFamily: 'Trebuchet MS', fontWeight: 700, lineHeight: '33px', textAlign: 'center', color: '#56D1A7' }}>Let's Begin Today.</span></h1>
          <div className="input-group" style={{ margin: "0px 6%", width: "87%", height: "40px", border: "1px solid #56D1A7", borderRadius: '10px' }}>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search by fundraiser name, title, location, cause or other keywords" />
            <div className="input-group-append" style={{ backgroundColor: "#56D1A7" }}>
              <span className="input-group-text" style={{ backgroundColor: "#56D1A7", width: "9%" }}>
                <i className="fas fa-search" style={{ color: "#fff" }}></i>
              </span>
            </div>
          </div>

          <div className='mt-4 mb-3'>
            <img className='mx-2' src={medical} alt="icon" style={{ width: "20%" }} />
            <img className='mx-2' src={education} alt="icon" style={{ width: "20%" }} />
            <img className='mx-2' src={nonprofit} alt="icon" style={{ width: "20%" }} />
            <img className='mx-2' src={emergency} alt="icon" style={{ width: "20%" }} />
            {/* <img className='mx-3' src={children} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={women} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={elder} alt="icon" style={{ width: "6%" }} />
            <img className='mx-3' src={other} alt="icon" style={{ width: "6%" }} /> */}
          </div>
        </div>
        <div className=''>
          <h3 className='text-center mt-5 pt-4' style={{ fontSize: "18px", lineHeight: "18px", fontFamily: "Trebuchet MS", fontWeight: "700" }}>Donate To Medical Fundraising</h3>
          <div className='row'>

            <div className='col-sm-12 pt-2'>
              <div className="shadow card mx-auto mt-5 " style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "30px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "30px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-12 mt-5 pt-4'>
              <div className="shadow card mx-auto" style={{ width: "18rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px" }}>
                <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
                <div className="">
                  <h4 className="text-center" style={{ fontFamily: "Lato", fontWeight: "500", fontSize: "22px", lineHeight: "22px", color: '#002140' }}>Help Ravi Beat Leukemia</h4>
                  <div className='mt-4' style={{ display: "flex", justifyContent: "space-around" }}>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Raised</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 70,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Remaining</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Rs. 1,00,000</p>
                    </div>
                    <div>
                      <p className='text-center' style={{ fontWeight: "400", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>Expire Date</p>
                      <p className='text-center' style={{ fontWeight: "700", fontSize: "12px", lineHeight: "12px", fontFamily: "Lato", color: "#002140" }}>23 Jun, 2023</p>
                    </div>
                  </div>
                  <div className="progress rounded-pill mt-3" style={{ margin: "0px 4%" }}>
                    <div className="progress-bar rounded-pill" role="progressbar" style={{ width: "70%", background: "linear-gradient(#56D1A7, #A0FFE2)" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className='row mt-4 mb-4 d-flex' style={{ margin: "0px 4%", justifyContent: "space-between" }}>
                    <div>
                      <Link to="#"><img src={donateButton} alt="Description of the image" style={{ height: "30px" }} /></Link>
                    </div>
                    <div>
                      <Link to="#"><img src={programDetailsButton} alt="Description of the image" style={{ height: "30px" }} /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <h3 className='text-center mt-5 pt-5' style={{fontSize:"22px", fontFamily:"Trebuchet MS", fontWeight:"600", fontWeight:"700" }}>What people are saying about<br/> <span style={{color:"#56D1A7"}}>Givehands</span></h3>
        <img src={mobileTestimonial} alt='demo' style={{ height: "550px", width:"100%" }}/>
        <div className='text-center mt-5'>
          <img src={string} alt="Description of the image" style={{ height: "25px" }} />
          <p  style={{ fontFamily: "Lato", fontSize: "18px", lineHeight: "24px", fontWeight: "300", marginTop: "30px", marginBottom: "60px" }}>If we all do something, then together there is <br /> no problem that we cannot solve!</p>
        </div>
        {/* Foooter */}
        <div style={{ backgroundColor: "black", justifyContent: "center", textAlign: "center" }}>
          <Link to="/"><img src={logo} alt="Description of the image" className="mt-4" style={{ height: "40px" }} /></Link>
          <p className='mt-3' style={{ fontFamily: "Lato", fontWeight: "400", fontSize: "14px", lineHeight: "18px", color: "#fff" }}>Join Us in Making a Difference</p>
          <div className="mt-4" style={{ display: "flex", justifyContent: "space-between", margin: "0px 24%" }}>
            <Link to=""><img src={facebook} alt="Description of the image" style={{ height: "30px" }} /></Link>
            <Link to=""><img src={telegram} alt="Description of the image" style={{ height: "30px" }} /></Link>
            <Link to=""><img src={instagram} alt="Description of the image" style={{ height: "30px" }} /></Link>
            <Link to=""><img src={twiter} alt="Description of the image" style={{ height: "30px" }} /></Link>
          </div>
        </div>
        <div className="pt-4" style={{ backgroundColor: "black", textAlign: "center" }}>
          <hr className="horizantal_line_mobile mx-4" />
          <h6 className="text-white mt-4" style={{ fontSize: "14px" }}>Home</h6>
          <h6 className="text-white mt-4" style={{ fontSize: "14px" }}>Donate</h6>
          <h6 className="text-white mt-4" style={{ fontSize: "14px" }}>Pricing</h6>
          <h6 className="text-white mt-4" style={{ fontSize: "14px" }}>Contact</h6>
          <p className="text-white mt-4" style={{ fontSize: "12px", fontFamily: "Poppins", fontWeight: "300" }}>© 2024 Givehand. All right reserved.</p>
          <hr className="horizantal_line_mobile mb-4 mx-4" />
          <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 8%" }}>
            <Link to="">
              <p className="mt-3" style={{ fontSize: "12px", color: "#56D1A7" }}>Privacy Policy</p>
            </Link>
            <Link to="">
              <p className="mt-3" style={{ fontSize: "12px", color: "#56D1A7" }}>Terms and Conditions</p>
            </Link>
          </div>
        </div>

      </div>
    </>

  )
}

export default HomePage