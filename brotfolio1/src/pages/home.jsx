import React from 'react'
import '../css/styles.css';
import About from './about';
import Contact from './contact';
import Protfolio from './Protfolio';
import Services from './services';


function home() {
  return (
<>
    <section className="home" id="home">
    <div className="home-text">
    <a href="#" className="h-line">
      <i className="ri-shining-2-line" />
      <span>This is Ahmad Mohmmad</span>
    </a>
    <h1>
      Web Developer and <br />
      <div className="span1"> full Stack</div>{" "}
    </h1>
    <h4>with 1+ years of experience</h4>
    <div className="social-icon">
      <a href="#">
        <i className="ri-github-fill" />
      </a>
      <a href="#">
        <i className="ri-linkedin-box-fill" />
      </a>
      <a href="#">
        <i className="ri-instagram-fill" />
      </a>
      <a href="#">
        <i className="ri-facebook-box-fill" />
      </a>
      <a href="#">
        <i className="ri-whatsapp-fill" />
      </a>
    </div>
    <div className="h-btn">
      <a href="#" className="btn1">
        My works
        <i className="ri-arrow-right-s-line" />
      </a>
      <a href="#" className="btn2">
        Download CV
        <i className="ri-download-2-line" />
      </a>
    </div>
  </div>
  </section>
  <About />
  <Contact />
  <Protfolio />
  <Services />

</>


  

  )
}

export default home