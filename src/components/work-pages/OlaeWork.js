import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import images
import champ from '../../assets/work/olae/olae-champions.png';
import landing from '../../assets/work/olae/olae-landing.png';
import stats from '../../assets/work/olae/olae-stats.png';
import teams from '../../assets/work/olae/olae-teams.png';

function OlaeWork() {

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
        OLAE
      </div>
      <div class="work-subtitle">
        Canada's first highschool esports organization.
      </div>
      <div class="work-body">
        <p>Jun 2017 - Jun 2019</p>
        <p>The Ontario League of Associated Esports is one of my proudest achievements from high school. This was an independent start-up project ideated by my classmate Bryan Ling. The goal was to provide Canadian high school students a platform to play and compete in professional quality, organized esports events. Our team worked with school administration to establish recognized clubs in each participating school. The project consisted of developing a highly functional website, organizing participants into live brackets, coordinating and managing game servers, and tracking individual statistics.</p>
        <p>I was directly in charge of the game servers for one of the games we were running. I can still remember the immense pride I felt when the first game started, and all participants were successfully in the server playing the game. Being a part of this project was a major reason I developed a strong interest in doing start-up work. Having a major role in something, and seeing it come to life is such a fantastic feeling. I want to be apart of more projects like this in the future.</p>
        <p>Today the platform has over a hundred active participants from a collection of schools across Ontario, with plans to expand further in the future.</p>
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        <img src={landing} alt="OLAE website landing screen."/>
        <img src={teams} alt="OLAE participating teams list."/>
        <img src={stats} alt="OLAE website season stats page."/>
        <img src={champ} alt="OLAE website season champion page."/>
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        <p><a href="https://olae.ca/" target="_blank" rel="noreferrer"> - website </a></p>
      </div>

      <div class="next-button">
        <Link to="/work/wob" style={{textDecoration: 'none', color: 'black'}}>← back</Link>
        <span style={{textAlign: 'right'}}>
        <Link to="/work/journo" style={{textDecoration: 'none', color: 'black'}}>next →</Link>
      </span></div>

      </motion.div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default OlaeWork;