import React from 'react'
import '../css/styles.css';


function services() {
  return (
    <section className="services" id="services">
  <div className="services-left">
    <a href="#" className="h-line">
      <i className="ri-shining-2-line" />
      <span>My services!</span>
    </a>
    <h2>
      What I Provide <span>To My Client</span>
    </h2>
    <p>
      I am dedicated to delivering high-quality web development services
      tailored to meet my clients' unique needs. My approach combines innovative
      design with functionality to create user-friendly websites that enhance
      user experience. I prioritize clear communication and collaboration
      throughout the project, ensuring that my clients are involved every step
      of the way. Whether its developing a new website from scratch or improving
      an existing one, I aim to provide solutions that not only meet but exceed
      client expectations.
    </p>
    <div className="h-btn">
      <a href="#" className="btn1">
        View all
        <i className="ri-arrow-right-s-line" />
      </a>
      <a href="#" className="btn2">
        Download CV
        <i className="ri-download-2-line" />
      </a>
    </div>
  </div>
  <div className="services-right">
    <div className="box">
      <div className="box-icon">
        <i className="ri-code-view" />
      </div>
      <div className="box-text">
        <h5>web Developer</h5>
        <p>I have complete three website frontend for my Client.</p>
      </div>
    </div>
    <div className="box">
      <div className="box-icon">
        <i className="ri-line-chart-line" />
      </div>
      <div className="box-text">
        <h5>Data Analisys</h5>
        <p>I have complete three website frontend for my Client.</p>
      </div>
    </div>
    <div className="box">
      <div className="box-icon">
        <i className="ri-macbook-line" />
      </div>
      <div className="box-text">
        <h5>Management</h5>
        <p>I have complete three website frontend for my Client.</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default services