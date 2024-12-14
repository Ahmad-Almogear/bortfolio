import React from 'react'
import '../css/styles.css';
import myImage from '../images/myImage.png';

function about() {
  return (
    <section className="about" id="about">
  <div className="about-img">
    <img src={myImage} alt="" />
  </div>
  <div className="about-text">
    <a href="#" className="h-line">
      <i className="ri-shining-2-line" />
      <span>About!</span>
    </a>
    <h2>
      More<span>About Me</span>
    </h2>
    <h5>
      Hello! I'm Ahmad Mohmmad , a web Developer based in jordanian. I'm very
      passinoate about the work that I do .
    </h5>
    <p>
      {" "}
      a web development intern passionate about coding and design. My journey
      into the world of web development has been exciting, and I'm always eager
      to explore new technologies and techniques. I believe that continuous
      learning is key to growth, and I strive to improve my skills with each
      project I undertake.
      <br />
      <br />I enjoy creating user-friendly websites that combine simplicity and
      functionality. My goal is to deliver exceptional experiences for users
      while pushing my creative boundaries. I look forward to new challenges and
      opportunities to collaborate and share knowledge with others in the field.
    </p>
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

  )
}

export default about