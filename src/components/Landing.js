import React from 'react';
import './Landing.css';

import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import face from '../assets/face.png';
import pc from '../assets/pc.png';
import phone from '../assets/phone.png';

import Boop from './LandingNav';
import ContactCard from './ContactCard';

function Landing() {

  const [offset, setOffset] = React.useState(true);

  console.log(offset)

  const flip = () => {
    console.log(offset)
    setOffset(false);
  };

  console.log(offset)

  return (
    <>
    <motion.div 
      class="landbox"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }}
    >

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

    <motion.div 
      class="navbox" 
      initial="hidden"
      animate="visible"
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
      <Link onClick={flip}><Boop image={phone} hoverimg={phone}/></Link>
    </motion.div>

    </motion.div>

    <ContactCard style={{marginTop: offset ? '100vh' : '0vh'}}/>
    </>
  );
}

export default Landing;