import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import images
import classroom from '../../assets/work/crambarry/crambarry-classroom.png';
import landing from '../../assets/work/crambarry/crambarry-landing.png';
import opening from '../../assets/work/crambarry/crambarry-opening.png';

function CramWork() {

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
        Crambarry
      </div>
      <div class="work-subtitle">
        a gameified studying web platform.
      </div>
      <div class="work-body">
        <p>Jan 2019 - Apr 2019</p>
        <p>This was a small team project I did towards the end of high school. The goal was to create a webapp which provided online chatrooms for the purpose of creating study group-chats to replace using Instagram. The goal was to provide more specific useful features for people to use. The site offered built-in flashcards, quiz creation, and content hosting for all the groups, as well as the group chatbox. The bonus was a customizable avatar that you could unlock cosmetics for by spending time on the website. This was to incentivise people to keep coming back, and to use the services the site had to offer.</p>
        <p>My role was to create all the cosmetic items that people could unlock and customize. I created the graphics and animations, and advised on the general look of the site.</p>
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        <img src={landing} alt="Screenshot of the website landing page."/>
        <img src={opening} alt="Screenshot of the website's box opening page."/>
        <img src={classroom} alt="Screenshot of the website's classroom page."/>
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        Unfortunately support was discontinued in early 2021.
      </div>

      <div class="next-button">
        <Link to="/work/journo" style={{textDecoration: 'none', color: 'black'}}>← back</Link>
        <span style={{textAlign: 'right'}}>
        <Link to="/work/loop" style={{textDecoration: 'none', color: 'black'}}>next →</Link>
      </span></div>

      </motion.div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default CramWork;