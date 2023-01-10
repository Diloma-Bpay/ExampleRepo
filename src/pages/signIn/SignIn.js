import React from 'react'
import './signIn.scss'

function SignIn() {
  return (
    <div className="signInContainer">
      <p>Sing In to Abstractor</p>
      <div className="mainContainer">
        <div className="left-container">
          <div className="googlesignin">
            <p className="google">Sign in with Google for better experience</p>
          </div>
        </div>
        <div className="verticalLine"></div>
        <div className="right-container">
          <form action="">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
            <br />
            <button type="submit">Sign In</button>
          </form>

          <div className="loginOptions">
            <p className='agent'>I am an Agent</p>
            <p className='forgot-password'>Forgot my Password</p>
          </div>
        </div>
      </div>

      <div className="moreOPtion">
        <div className="signUplink">
          <p className="newUser">New to Abstract?<span>Sign Up</span></p>
          <p className="recoverpass"> Have you emailed us? Get a password </p>
          <p className="communication">
            If you've communicated with our support staff through email previously, <br /> you're already registered. You probably don't have a password yet, though.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignIn