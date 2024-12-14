import React from 'react'
import '../css/styles.css';
import logo from '../images/logo.png';
function header() {
  return (
    <header>
    <header>
  <a href="#" className="logo">

    <img src={logo} alt="" />
  </a>
  <ul className="menulist">
    <a href="/" className="active">
      Home
    </a>
    <a href="/about">About Me</a>
    <a href="/services">Services</a>
    <a href="/Protfolio">Portfolio</a>
    <a href="/contact">Contact</a>
  </ul>
  {/*!right btn----------*/}
  <div className="menu-right">
    <a href="#" className="menu-btn">
      <span>Let's Talk </span>
      <i className="ri-message-3-line" />
    </a>
    <div className="bx bx-menu" id="menu-icon" />
  </div>
</header>

  </header>
  
  )
}

export default header