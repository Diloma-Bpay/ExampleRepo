import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="logo-wrapper">
        <div className="abstract_logo">Logo</div>
        <div className="helpCenter">Help Center</div>
      </div>

      <div className="navbarControl">
        <div className="submitReq"> Submit a Requet</div>
        <div className="signInDiv">Sign In</div>
      </div>
    </div>
  )
}

export default Navbar