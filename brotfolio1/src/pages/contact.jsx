import React from 'react';
import '../css/styles.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';



function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.send(
        'service_s83cfrj',   // من لوحة التحكم في EmailJS
        'template_rb7whkg',  // قالب البريد
        {
          from_name: name,
          from_email: email,
          message: message
        },
        'ux7WNptHCD-lbcejo'    // المفتاح العام
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('تم إرسال رسالتك بنجاح');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('حدث خطأ في الإرسال');
        }
      );
    };
  


  return (
    <section className="contact" id="contact">
  <div className="contact-main">
    <a href="#" className="h-line">
      <i className="ri-shining-2-line" />
      <span>My contact!</span>
    </a>
    <h2>
      Got a projects <span>let's talk</span>
    </h2>
    <div className="email">
      <p>Email:</p>
      <h6>ahmadalmoger@gmail.com</h6>
    </div>
    <div className="num">
      <p>Coll:</p>
      <h6>0781516814</h6>
    </div>
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
  </div>
  <form className="contact-from" onSubmit={sendEmail}>

    <input
     type="text" 
     placeholder="Your Name" 
     value={name}
     onChange={(e) => setName(e.target.value)}
     required 
     />

    <input
     type="Email" 
     placeholder="Email Address" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required 
     />
 
    <textarea
      name=""
      id=""
      placeholder="write Message here..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    />
    <input onClick={sendEmail} defaultValue="submit now" className="submit-btn" />
  </form>
</section>

  )
}

export default Contact