import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import Categories from '../Categories/Categories';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Landing() {
  return (
    <div>
      <div className='landing' id='landing'>
        <Navbar />
      </div>
      <Categories />
      <About />
      <Contact />
    </div>
  );
}

export default Landing;
