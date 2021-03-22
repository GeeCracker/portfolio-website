import React from 'react';
import { useEffect, useState } from 'react';
import './Landing.css';

import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';

import face from '../assets/face.png';
import pc from '../assets/pc.png';
import phone from '../assets/phone.png';
import random_face from '../assets/face-cropped.png';

import crambarry from '../assets/work/crambarry/crambarry-classroom.png';
import wob from '../assets/work/wob/wob-screen.png';
import olae from '../assets/work/olae/olae-landing.png';
import journo from '../assets/work/journo/journo-creation.png';
import loop from '../assets/work/loop/loop-dropdown.png';

import Boop from './LandingNav';
import WorkImage from './WorkImage';

function Landing(useWindow) {

  // Scroll animation initialization
  useEffect(() => {
    AOS.init({
      duration: 700
    });
  }, [])

  // get scroll postion logic
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // scroll event handler
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
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

  // show work images state
  const [showImage, setShowImage] = useState(false);
  const [image, setImage] = useState();
  const [imageHeight, setImageHeight] = useState(200);
  const [imageWidth, setImageWidth] = useState(200);
  const handleWorkHover = ( image, y, x ) => {
    setShowImage(true);
    setImage(image);
    setImageHeight(y);
    setImageWidth(x);
  }
  const handleWorkUnhover = () => {
    setShowImage(false);
  }

  const [moreNext, setMoreNext] = useState("→");
  const moreClick = () => {
    moreNext === "→" ? setMoreNext("to come...") : setMoreNext("→")
  }

  const circle_style = {
    top: y-25,
    left: x-25,
  }

  return (
    <>
    
    <motion.div 
      class="hero-text"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }}
      transition={{ ease: "easeOut", duration: 0.8, delay: 0.1 }}
    >
      Hi! I'm Graham. I'm a{" "}
      <TextLoop 
          mask={false} 
          springConfig={{ stiffness: 100, damping: 10 }}
          adjustingSpeed={300}
      >
        <span>student.</span>
        <span>developer.</span>
        <span>designer.</span>
      </TextLoop>
    </motion.div>

    <motion.div class="arrow-down" 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          marginTop: "40vh"
        },
        visible: {
          opacity: 1,
          marginTop: "55vh"
        }
      }}
      transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}/>

    <motion.div 
      class="navbox" 
      initial="hidden"
      animate= {scrollPosition < 250 ? "visible" : "hidden"}
      variants={{
        hidden: {
          marginTop: "100vh"
        },
        visible: {
          marginTop: "60vh"
        }
      }}
      transition={{ ease: "easeOut", duration: 0.75 }}
    >
      <Link to="/portfolio-website"><Boop image={pc} hoverimg={pc}/></Link>
      <Link to="/portfolio-website"><Boop image={face} hoverimg={face}/></Link>
      <Link tp="/portfolio-website"><Boop image={phone} hoverimg={phone}/></Link>
    </motion.div>

    <div class="screenbox" />
    
    <div
      class="screenbox" 
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-delay="50"
      >

      <div class="content-box">
        <div class="subtitle">
          Thanks for checking out my site :)
        </div>
        <div class="about-me-text">
        
          <p>I’m a second-year software development student at Queen’s University. I really like making stuff, especially apps and websites. Through my experiences working on various projects, I’ve discovered a passion for developing attractive and responsive front-end UIs. I am also a very organized developer; I love when codebases are tidy and well-documented.</p>
          <p>My favorite technologies to work with right now are JavaScript-based frameworks like React and React Native. A lot of my recent work has focused on web and mobile front-end development, but my number one goal right now is to learn as many technologies as I can get my hands on so that I can grow my skills. Scroll down a bit further to see some one my previous work!</p>        
        </div>
        <div class="about-me-text">
            Get in{" "}
            <a 
                href="https://www.linkedin.com/in/gcarkner/"
                target="_blank"
                rel="noreferrer" 
            >
                <span>touch</span>
            </a>
            {" "}or check out my{" "}
            <a 
                href="https://github.com/GeeCracker"
                target="_blank"
                rel="noreferrer" 
            >
                <span>github</span>
            </a>!
        </div>

        <img class="random-image" src={random_face} alt="an upside-down floating illustration of a face." />
      </div>

    </div>

    <WorkImage 
      mouseX={x} 
      mouseY={y} 
      visible={showImage}
      image={image}
      height={imageHeight}
      width={imageWidth}/>

    <div
      class="screenbox" 
      data-aos="fade-in"
      data-aos-easing="ease-in"
      data-aos-delay="50"
      >

      <div class="content-box">
        <div class="subtitle">
          Here are some things I've worked on.
        </div>
        <div class="work-text">
          <Link to="/work/wob" style={{textDecoration: 'none'}}>
          <div 
            class="work-row" 
            onMouseEnter={ () => handleWorkHover(wob, 400, 190)}
            onMouseLeave={handleWorkUnhover}>1. <span>a geography-based anonymous social media app.</span></div>
          </Link>
          <Link to="/work/olae" style={{textDecoration: 'none'}}>
          <div 
            class="work-row" 
            onMouseEnter={ () => handleWorkHover(olae, 300, 590)}
            onMouseLeave={handleWorkUnhover}>2. <span>Canada's first highschool esport organization.</span></div>
          </Link>
          <Link to="/work/journo" style={{textDecoration: 'none'}}>
          <div 
            class="work-row" 
            onMouseEnter={() => handleWorkHover(journo, 300, 590)}
            onMouseLeave={handleWorkUnhover}>3. <span>a streamlined journaling experience.</span></div>
          </Link>
          <Link to="/work/crambarry" style={{textDecoration: 'none'}}>
          <div 
            class="work-row" 
            onMouseEnter={() => handleWorkHover(crambarry, 300, 550)}
            onMouseLeave={handleWorkUnhover}>4. <span>a gameified studying web platform.</span></div>
          </Link>
          <Link to="/work/loop" style={{textDecoration: 'none'}}>
          <div 
            class="work-row" 
            onMouseEnter={() => handleWorkHover(loop, 400, 220)}
            onMouseLeave={handleWorkUnhover}>5. <span>a subversion of the traditional social media platform.</span></div>
          </Link>
          <div class="work-row" onClick={moreClick}><span>more {moreNext}</span></div>
        </div>
      </div>

    </div>

    <div
      class="screenbox" 
      data-aos="fade-in"
      data-aos-easing="ease-in"
      style={{
        minHeight: '0px',
        height: '60vh',
      }}
      >

      <div class="content-box">
        <div class="subtitle">
          Let's <span style={{color:"#FFA5AB"}}>chat</span>!
        </div>
        <div class="contact-link">gcarkner@gmail.com</div>
        <div class="contact-link">(226) 606 8671</div>
      </div>

    </div> 

    <div class="pink_circle" style={circle_style}/>

    </>
  );
}

export default Landing;