import React from 'react'
import './signUp.scss'

function SignUp() {
  return (
    <div className="signUpContainer">
      <h3>Sign up to Abstract</h3>
      <p>Please fill out this form, and we'll send you a <br /> welcome email so you can verify your email address <br /> and sign in.</p>
      <form action="">
        <label htmlFor="">Your Full name*</label>
        <input type="name" name="" id="" />
        <br />
        <label htmlFor="">Your email*</label>
        <input type="email" name="" id="" />
        <br />
        <button type="submit">Sign In</button>
      </form>

      <div className="cancelText" >
        Cancel
      </div>
    </div>
  )
}

export default SignUp