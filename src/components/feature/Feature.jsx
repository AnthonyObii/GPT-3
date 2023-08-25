import React from 'react';
import './feature.css';

const Feature = ({title, text}) => {
  return (
    <div className="tony1__features-container__feature">
      <div className="tony1__features-container-feature-title">
      <div/>
      <h1>{title}</h1>
      </div>
       <div className="tony1__features-container_feature-text">
       <p>{text}</p>
       </div>
     </div>
  )
}

export default Feature