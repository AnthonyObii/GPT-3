import React from 'react';
import './brand.css';
import { google, slack , atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className="tony1__brand Section__padding">
    <div>
      <img src= {google} alt= "google"/>
    </div>
    <div>
      <img src= {slack} alt= "slack"/>
    </div>
    <div>
      <img src= {atlassian} alt= "atlassian"/>
    </div>
    <div>
      <img src= {dropbox} alt= "dtopbox"/>
    </div>
    <div>
      <img src= {shopify} alt= "shopify"/>
    </div>
    </div>
  )
}

export default Brand