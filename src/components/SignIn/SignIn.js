import React from 'react';
import "./SignIn.css";
import Background from './SignPageBg.png';

function SignIn() {
    
    return (
        <div className="background-image">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-sm-12'>
                        <h1 className='mt-5' style={{fontWeight:"400", fontSize:"40px", lineHeight:"60px", fontFamily:"Lato"}}>Sign in to save and continue</h1>
                    </div>
                    <div className='col-lg-8 col-sm-12 mt-5'>
                        <div className='shadow loginForm'>
                            <form>
                                <h3 style={{color:"#000000", fontFamily:"Lato", fontWeight:"400",lineHeight:"28px",fontSize:"22px"}}>Your account details</h3>
                                <div class="form-group">                      
                                    <input type="email" class="form-control formInput" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                                </div>
                                <div class="form-group">    
                                    <input type="password" class="form-control formInput" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <p className='text-center' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"40px"}}>By clicking the Sign In button below, you agree to the Givehands <br/> Terms of Service and acknowledge the Privacy Notice.</p>
                                <button type="submit" style={{width:"100%",color:"#fff", backgroundColor:"#56D1A7", fontSize:"20px", fontFamily:"Lato", fontWeight:"700", marginTop:"40px"}} class="btn">Sign In</button>
                                <p className='text-center' style={{color:"#00000080", lineHeight:"19px", fontSize:"14px", fontWeight:"400", fontFamily:"Lato", marginTop:"40px"}}>Do not have an account? Sign up</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn