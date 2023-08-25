import React from 'react';
import { Brand, Navbar , CTA } from './components';
import { Blog, Features, Footer, Header, Possibility, Tony1 } from './containers';
import './App.css'; 

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Tony1 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;