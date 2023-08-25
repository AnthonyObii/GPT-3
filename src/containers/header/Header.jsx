import React from 'react';
import './header.css';
import people from "../../assets/people.png";
import Ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="tony1__header section_padding" id="home" >
      <div className="tony1__header-content">
      <h1 className="gradient__text"> Let's Build Something amazing with GPT-3 OpenAI</h1>
      <p>Are you ready to take your ideas to the next level? With GPT-3 from OpenAI, you can build something truly amazing. Whether you're a developer, a marketer, or a business owner, GPT-3 can help you create content, generate ideas, and automate tasks like never before. Let's unlock the power of GPT-3 together and build something that will change the world.</p>
      <div className="tony1__header-content__input">
        <input type="email" placeholder="Your Email Address"/>
        <button type="button">Get Started</button>
      </div>
      <div className="tony1__header-content__people">
        <img src={people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      </div>
      <div className="tony1__header-image">
        <img src={Ai} alt= "ai"/>
      </div>
    </div>
  )
}

export default Header