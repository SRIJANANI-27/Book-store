import React, { useRef } from 'react';
import './about.css';
import per1 from '../../assets/per1.jpeg';
import per2 from '../../assets/per2.jpeg';
import per3 from '../../assets/per3.avif';
import per4 from '../../assets/per4.avif';
import per5 from '../../assets/per1.jpeg';
import per6 from '../../assets/per2.jpeg';
import per7 from '../../assets/per1.jpeg';

function About() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    }
  };

  return (
    <div id='about' className='about'>
      <h1>About</h1>
      <p>Meet our fully remote team dedicated here</p>
      <div className='image-wrapper'>
        <button className='arrow-button left-arrow' onClick={handleScrollLeft}>←</button>
        <div className='image-container' ref={scrollRef}>
          <img src={per1} alt="Person 1" />
          <img src={per2} alt="Person 2" />
          <img src={per3} alt="Person 3" />
          <img src={per4} alt="Person 4" />
          <img src={per5} alt="Person 5" />
          <img src={per6} alt="Person 6" />
          <img src={per7} alt="Person 7" />
        </div>
        <button className='arrow-button right-arrow' onClick={handleScrollRight}>→</button>
      </div>
    </div>
  );
}

export default About;
