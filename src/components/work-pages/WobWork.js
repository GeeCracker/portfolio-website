import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import images
import onboard from '../../assets/work/wob/wob-onboard.png';
import screen from '../../assets/work/wob/wob-screen.png';
import menu from '../../assets/work/wob/wob-menu.png';
import newpost from '../../assets/work/wob/wob-newpost.png';
import onboard2 from '../../assets/work/wob/wob-onboard2.png';
import pin from '../../assets/work/wob/wob-pin.png';
import post from '../../assets/work/wob/wob-post.png';
import posts from '../../assets/work/wob/wob-posts.png';
import wow from '../../assets/work/wob/wobbly_wow.png';

function WobWork() {

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

    <Link to="/portfolio-website" style={{textDecoration: 'none', color: 'black'}}>
      <div class="back-arrow">← home</div>
    </Link>

    <motion.div 
      class="work-content-box" 
      initial="hidden"
      animate= "visible"
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }}
      transition={{ ease: "easeOut", duration: 0.75 }}
    >
      
      <div class="work-title">
        WOB
      </div>
      <div class="work-subtitle">
        a geography-based anonymous social media.
      </div>
      <div class="work-body">
        <p>Sep 2019 - Aug 2020</p>
        <p>For the 2019-2020 season of QTMA, my team wanted to create something that didn’t exist in the world of social media. We identified a lack of authenticity and personal connection in the content posted on modern social media apps. Our solution was WOB.</p>
        <p>Posts on WOB are directly linked to your geographical location, users can only see posts within a set radius of their location, and all posts are entirely anonymous. The goal was to create an environment where all the content you see is meaningful to you, while also encouraging the creation of authentic content through the security of anonymity.</p>
        <p>My primary role in the development process was the design and implementation of the UI. I worked with React Native and Node to coordinate various pre-built and custom components. It was my first time working with these technologies, so I was able to learn a lot from the experience. As a result, JavaScript frameworks are my favorite technologies to work with, especially React Native.</p>
        <p><i>Stack: React Native, Python</i></p>
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        <img src={onboard} />
        <img src={onboard2} />
        <img src={pin} />
        <img src={screen} />
        <img src={posts} />
        <img src={post} />
        <img src={menu} />
        <img src={newpost} />
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        <p><a href="https://qtma.ca/wob.html" target="_blank"> - QTMA website posting </a></p>
      </div>

      <div class="next-button"><span style={{textAlign: 'right'}}>
        <Link to="/work/olae" style={{textDecoration: 'none', color: 'black'}}>next →</Link>
      </span></div>

      </motion.div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default WobWork;