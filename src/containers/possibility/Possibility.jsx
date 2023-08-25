import React from 'react';
import possibilityImage from "../../assets/possibility.png";
import './possibility.css';

const Possibility = () => {
  return (
    <div className="tony1__possibility section__padding" id="possibility"n>
      <div className="tony1__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="tony1__possibility-content">
        <h4> Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p> From virtual assistants and chatbots to language translation and content creation, GPT-3 has the potential to revolutionize how we interact with technology and how we process and analyze data. As the technology continues to evolve and improve, we can only imagine the new and innovative applications that will emerge.</p>
        <h4> Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility