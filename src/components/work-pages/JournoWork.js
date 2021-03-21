import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import images
import creation from '../../assets/work/journo/journo-creation.png';
import login from '../../assets/work/journo/journo-login.png';
import profile from '../../assets/work/journo/journo-profile.png';
import text from '../../assets/work/journo/journo-text-creation.png';

function JournoWork() {

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
        journ-o
      </div>
      <div class="work-subtitle">
        a streamlined journaling experience.
      </div>
      <div class="work-body">
        <p>Jan 2021</p>
        <p>Journ-o was developed during the 2021 QHacks hackathon at Queen’s University. Our idea was to create an application that would allow people to experience frictionless journaling. We wanted to make the journaling experience as painless as possible by reducing journal writing time from 20 minutes, down to less than 1.</p>
        <p>Journ-o is a web app the facilitates the generation of short, daily journals that are generated with the guidance of the user. The website asks the user a few simple questions, and a customized journal account of their day get generated and stored in out Firebase backend system. The user can come back anytime to read their past journal entries.</p>
        <p>My role in the development was primarily the design and implementation of the front-end for the web app. This was a great opportunity for me to practice my design ideation process. It was also another opportunity to get comfortable with Figma, which I now use all the time. Although we didn’t end up winning any awards, overall I would say it was a really good experience, and one of my most successful hackathons to date.</p>
        <p><i>Stack: React, Firebase</i></p>
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        <img src={login} alt="Screenshot of website login page."/>
        <img src={profile} alt="Screenshot of website profile page."/>
        <img src={creation} alt="Screenshot of website journal creation page."/>
        <img src={text} alt="Screenshot of website journal creation text question type."/>
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        <p><a href="https://github.com/GeeCracker/journ-o" target="_blank" rel="noreferrer"> - github </a></p>
        <p><a href="https://devpost.com/software/journ-o?ref_content=user-portfolio&ref_feature=in_progress" target="_blank" rel="noreferrer"> - devpost listing</a></p>
        <p><a href="https://www.figma.com/file/CxbggBBhXZGSb1s5nKlFzS/journ-o-QHacks2021?node-id=0%3A1" target="_blank" rel="noreferrer"> - figma design file </a></p>
      </div>

      <div class="next-button">
        <Link to="/work/olae" style={{textDecoration: 'none', color: 'black'}}>← back</Link>
        <span style={{textAlign: 'right'}}>
        <Link to="/work/crambarry" style={{textDecoration: 'none', color: 'black'}}>next →</Link>
      </span></div>

      </motion.div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default JournoWork;