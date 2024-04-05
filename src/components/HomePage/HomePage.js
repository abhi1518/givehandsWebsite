import React from 'react';
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
import string from "../../assets/string.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
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
                  <Link className="nav-link navLink" to="#">SignIn</Link>
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
      <div className='container-fluid'>
        <div style={{ display: "flex", justifyContent: "space-between", margin: "25px 110px" }}>
          <h1 style={{ fontSize: "28px", lineHeight: "28px", fontFamily: "Lato", fontWeight: "400", color: "#002140" }}>Donate To Medical Fundraising Around The World </h1>
          <button type="submit" style={{ width: "18%", color: "#fff", backgroundColor: "#56D1A7", fontSize: "20px", fontFamily: "Lato", fontWeight: "500", marginTop: "15px", borderRadius: "35px" }} class="btn">View All Campaigns</button>
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-sm-12'>
            <div className="card shadow" style={{ width: "23rem" }}>
              <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title text-center">Help Ravi Beat Leukemia</h5>
                <div className='' style={{ display: "flex", justifyContent: "space-around" }}>
                  <div>
                    <p className='text-center'>Raised</p>
                    <p className='text-center'>Rs. 70,000</p>
                  </div>
                  <div>
                    <p className='text-center'>Remaining</p>
                    <p className='text-center'>Rs. 1,00,000</p>
                  </div>
                  <div>
                    <p className='text-center'>Expire Date</p>
                    <p className='text-center'>23 Jun, 2023</p>
                  </div>
                </div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-12 mx-5'>
            <div className="card" style={{ width: "23rem" }}>
              <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-12'>
            <div className="card" style={{ width: "23rem" }}>
              <img className="card-img-top p-3" src={cardPhoto} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"90px"}}>
        <p className='text-center' style={{fontWeight:"300", fontSize:"40px", lineHeight:"33px", color:"#002140"}}>What people are saying about <span style={{color:"#56D1A7"}}>Givehands</span> </p>
        <img className="text-white" src={sayingAbout} alt="Description of the image" style={{ height: "430px", width: "100%" }} />
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

  )
}

export default HomePage