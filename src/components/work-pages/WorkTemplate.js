import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// import images
import daily from '../../assets/work/fyf/FYF-Daily.jpg';
import journo from '../../assets/work/journo/journo-login.png';

function WorkTemp() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get mouse position
  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY]
  )

  const circle_style = {
    top: y-25,
    left: x-25,
  }

  return (
    <>

    <div class="back-arrow">←</div>

    <div
      class="work-content-box" 
      >
      
      <div class="work-title">
        Work Title
      </div>
      <div class="work-subtitle">
        work subtitle, short description.
      </div>
      <div class="work-body">
        <p>Work body text description.</p>
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        <img src={daily} />
        <img src={journo} />
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        <p> - github</p>
        <p> - website</p>
      </div>

      <div class="next-button">← back <span style={{textAlign: 'right'}}>next →</span></div>

    </div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default WorkTemp;