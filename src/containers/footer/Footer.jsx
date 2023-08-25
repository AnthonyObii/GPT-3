import React from 'react';
import './footer.css';
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="tony1__footer section__padding">
      <div className="tony1__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="tony1__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="tony1__footer-links">
        <div className='"tony1__footer-links_logo'>
          <img src={gpt3logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="tony1__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p> 
            <p>Counters</p>
            <p>Contacts</p>
        </div>
        <div className="tony1__footer-links_div">
            <h4>Company</h4>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>Contacts</p>
        </div>
        <div className="tony1__footer-links_link">
            <h4>Get in Touch</h4>
            <p>Overons</p>
            <p><a href="mailto:tonyobi98@gmail.com">Email</a></p>
            <p> <a href="">Portfolio</a></p>
        </div>
      </div>
      <div className="tony1__footer-copyright">
        <p> © 2021 GPT-3. All rights reserved.</p>
      </div>
   </div>
  )
}

export default Footer