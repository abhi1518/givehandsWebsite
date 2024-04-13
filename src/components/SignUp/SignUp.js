import React, { useState } from 'react';
import logo from "../../assets/navbarLogo.png";
import { Link } from "react-router-dom";

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [conformpasswordVisible, setConformPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleCConformPasswordVisibility = () => {
      setConformPasswordVisible(!conformpasswordVisible);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        if (!fullName.trim()) {
            errors.fullName = 'Please enter your full name';
        }
        if (!email.trim()) {
            errors.email = 'Please enter your email address';
        }
        if (!password.trim()) {
            errors.password = 'Please enter your password';
        }
        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'Please confirm your password';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length === 0) {
            // If there are no errors, proceed with form submission
            console.log('Form submitted:', { fullName, email, password, confirmPassword });
            // You can add further actions like API calls here
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="background-image">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 signUp_margin'>
                        <img src={logo} alt="logo" width="60%"/>
                        <h1 className='' style={{fontWeight:"400", fontSize:"38px", lineHeight:"60px", fontFamily:"Lato"}}>Create an account to save and continue</h1>
                    </div>
                    <div className='col-lg-8 col-sm-12 signUp_margin'>
                        <div className='shadow loginForm'>
                            <form onSubmit={handleSubmit}>
                                <h3 style={{color:"#000000", fontFamily:"Lato", fontWeight:"400",lineHeight:"28px",fontSize:"22px"}}>Enter your details</h3>
                                <div className="form-group">                      
                                    <input type="text" name="fullName" value={fullName} onChange={handleInputChange} className="form-control formInput" aria-describedby="fullNameHelp" placeholder="Full Name" />
                                    {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                                </div>
                                <div className="form-group">    
                                    <input type="email" name="email" value={email} onChange={handleInputChange} className="form-control formInput" aria-describedby="emailHelp" placeholder="Email Address" />
                                    {errors.email && <div className="text-danger">{errors.email}</div>}
                                </div>
                                <div className="form-group">    
                                    <input type={passwordVisible ? "text" : "password"} name="password" value={password} onChange={handleInputChange} className="form-control formInput" placeholder="Enter Password" />
                                    <span onClick={togglePasswordVisibility} style={{position: "absolute", right: "120px", top: "47%", transform: "translateY(-50%)", cursor: "pointer"}}>
                                        {passwordVisible ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                    </span>
                                    {errors.password && <div className="text-danger">{errors.password}</div>}
                                </div>
                                <div className="form-group">    
                                    <input type={conformpasswordVisible ? "text" : "password"} name="confirmPassword" value={confirmPassword} onChange={handleInputChange} className="form-control formInput" placeholder="Confirm Password" />
                                    <span onClick={toggleCConformPasswordVisibility} style={{position: "absolute", right: "120px", top: "57%", transform: "translateY(-50%)", cursor: "pointer"}}>
                                        {conformpasswordVisible ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                    </span>
                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                                </div>
                                <p className='text-center' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"30px"}}>By clicking the Sign In button below, you agree to the Givehands <br/> <u>Terms of Service</u> and acknowledge the <u>Privacy Notice.</u></p>
                                <button type="submit" style={{width:"100%",color:"#fff", backgroundColor:"#56D1A7", fontSize:"20px", fontFamily:"Lato", fontWeight:"700", marginTop:"30px"}} className="btn">Sign In</button>
                                <p className='text-center mt-4' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"3px"}}>Have an account? <Link to="/sign_in"><b><u>Sign in</u></b></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
