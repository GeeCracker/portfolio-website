import React from 'react';
import { useEffect, useState } from 'react';
import './Landing.css';

import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import face from '../assets/face.png';
import pc from '../assets/pc.png';
import phone from '../assets/phone.png';
import random_face from '../assets/face-cropped.png';

import Boop from './LandingNav';
import ContactCard from './ContactCard';

function Landing(useWindow) {

  // Scroll animation initialization
  useEffect(() => {
    AOS.init({
      duration: 800
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
      animate= {scrollPosition < 100 ? "visible" : "hidden"}
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
      <Link to="/me"><Boop image={pc} hoverimg={pc}/></Link>
      <Link to="/about"><Boop image={face} hoverimg={face}/></Link>
      <Link tp="/me"><Boop image={phone} hoverimg={phone}/></Link>
    </motion.div>

    <div class="screenbox" />

    <div class="screenbox" data-aos="fade-in">

      <div class="content-box">
        <div class="subtitle">
          Thanks for checking out my site :)
        </div>
        <div class="about-me-text">
        
          <p>Hey! I'm Graham, a second-year software development student at Queen’s University, expecting to graduate in 2023. I really like making stuff, especially apps and websites. Through my experiences working on various projects, I’ve discovered a passion for developing attractive and responsive front-end UIs. I am also a very organized developer; I love when codebases are tidy and well-documented.</p>
          <p>My favorite technologies to work with right now are JavaScript-based frameworks like React and React Native. A lot of my recent work has focused on web and mobile front-end development, but I’m interested in getting my hand on all sorts of things. My number one goal right now is to learn as much as I can about all sorts of technologies so that I can apply that knowledge in the future.</p>
        
        </div>
        <div class="about-me-text">
            Get in{" "}
            <a 
                style={{ textDecoration: 'none' }} 
                href="https://www.linkedin.com/in/gcarkner/"
                target="_blank"
            >
                <span>touch</span>
            </a>
            {" "}or check out my{" "}
            <a 
                style={{ textDecoration: 'none' }} 
                href="https://github.com/GeeCracker"
                target="_blank"
            >
                <span>github</span>
            </a>!
        </div>

        <img class="random-image" src={random_face} />
      </div>

    </div>

    </>
  );
}

export default Landing;