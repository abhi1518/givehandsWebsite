import React, { useState } from 'react';
import "./SignIn.css";
import logo from "../../assets/navbarLogo.png";
import { Link } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset errors
        setEmailError('');
        setPasswordError('');

        // Basic validation
        if (!email.trim()) {
            setEmailError('Please enter your email');
            return;
        }

        if (!password.trim()) {
            setPasswordError('Please enter your password');
            return;
        }

        // If all fields are valid, proceed with form submission
        // Here you can call an API or perform any other action
        console.log('Form submitted:', { email, password });
    };

    return (
        <div className="background-image">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12 signIn_Margin'>
                        <img src={logo} alt="logo" width="60%"/>
                        <h1 className='' style={{fontWeight:"400", fontSize:"40px", lineHeight:"60px", fontFamily:"Lato"}}>Sign in to save and continue</h1>
                    </div>
                    <div className='col-lg-8 col-sm-12 signIn_Margin'>
                        <div className='shadow loginForm'>
                            <form onSubmit={handleSubmit}>
                                <h3 style={{color:"#000000", fontFamily:"Lato", fontWeight:"400",lineHeight:"28px",fontSize:"22px"}}>Your account details</h3>
                                <div className="form-group">                      
                                    <input type="email" className="form-control formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                                    {emailError && <div className="text-danger">{emailError}</div>}
                                </div>
                                <div className="form-group">    
                                    <input type="password" className="form-control formInput" id="exampleInputPassword1" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                    {passwordError && <div className="text-danger">{passwordError}</div>}
                                </div>
                                <div className='mt-4'>
                                    <Link to=""><u style={{fontFamily:"Lato", fontWeight:"400", lineHeight:"19px", fontSize:"16px"}}>Forgot your password?</u></Link>
                                </div>
                                <p className='text-center' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"40px"}}>By clicking the Sign In button below, you agree to the Givehands <br/> Terms of Service and acknowledge the Privacy Notice.</p>
                                <button type="submit" style={{width:"100%",color:"#fff", backgroundColor:"#56D1A7", fontSize:"20px", fontFamily:"Lato", fontWeight:"700", marginTop:"40px"}} className="btn">Sign In</button>
                                <p className='text-center' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"40px"}}>Do not have an account? <Link to="/sign_up"><b>Sign up</b></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
