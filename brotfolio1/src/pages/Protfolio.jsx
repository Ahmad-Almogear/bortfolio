import React from 'react';
import '../css/styles.css';
import Screenshot2 from '../images/Screenshot2.png';
import Screenshot  from '../images/Screenshot.png';
import Screenshot3 from '../images/Screenshot3.png'



function Protfolio() {
  return (
    <section className="portfolio" id="protfolio">
  <div className="mid-text">
    <a href="#" className="h-line">
      <i className="ri-shining-2-line" />
      <span>Portfolio</span>
    </a>
    <h2>
      My Latest<span>Projects</span>
    </h2>
  </div>
  <div className="portfolio-content">
    <div className="row">
      <div className="row-img">
        <img src={Screenshot} alt="" />
      </div>
      <div className="row-in">
        <div className="row-left">
          <h3>wibsite Design</h3>
          <h6>web Design, App Design</h6>
        </div>
        <div className="row-right">
          <a href="#">
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="row-img">
        <img src={Screenshot2} alt="" />
      </div>
      <div className="row-in">
        <div className="row-left">
          <h3>wibsite Design</h3>
          <h6>web Design, App Design</h6>
        </div>
        <div className="row-right">
          <a href="#">
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="row-img">
        <img src={Screenshot3} alt="" />
      </div>
      <div className="row-in">
        <div className="row-left">
          <h3>wibsite Design</h3>
          <h6>web Design, App Design</h6>
        </div>
        <div className="row-right">
          <a href="#">
            <i className="ri-arrow-right-line" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Protfolio