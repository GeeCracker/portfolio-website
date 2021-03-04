import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import images
import daily from '../../assets/work/fyf/FYF-Daily.jpg';
import journo from '../../assets/work/journo/journo-login.png';

function LoopWork() {

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
        Loop
      </div>
      <div class="work-subtitle">
        a subversion of the traditional social media platform.
      </div>
      <div class="work-body">
        <p>Jun 2020 - Present</p>
        <p>For the 2020-2021 QTMA season, my team worked to develop a better social media app. Loop has seamless integrations with third party APIs to allow for a huge range of enriched content, from Spotify playlists to Uber Eats recommendations, our app infrastructure facilities lots of sharing. Users create Loops with their friends to chat and share content without filters of internet points in the form of likes. The point was to create a platform that could be used to actually socialize with your friends.</p>
        <p>I was a developer for the project, and I worked on many parts of the app from integration front-end UIs to designing the infrastructure for the Loop system in the back end. It was great to work with my team as people’s varying skillsets worked to improve the overall final product.</p>
        <p><i>Stack: React Native, Firebase, GetStreamAPI</i></p>
      </div>

      {/* <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
      </div> */}

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        <p><a href="http://www.getloopapp.ca/" target="_blank"> - prelaunch website </a></p>
      </div>

      <div class="next-button">
        <Link to="/work/crambarry" style={{textDecoration: 'none', color: 'black'}}>← back</Link>
      </div>

      </motion.div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default LoopWork;