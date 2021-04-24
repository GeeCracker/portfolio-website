import React from 'react';
import { useEffect, useState } from 'react';
import '../Landing.css';
import './Work.css';

import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from "react-router-dom";

const WorkTemp = ( props ) => {
  /*  props:
      workTitle - string - title of work
      workSubtitle - string - subtitle, one-sentence description
      workBody - string - body text for work
      screens - list - 2d list of imported img variables and alt text
        [[img, text], [img, text]...]
      links - list - 2d list links to external websites
        [[link, text], [link, text]...]
      backLink - string - path to previous work page
      nextLink - string - path to next work page
  */

  // ===== Mouse Tracking Code =====
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

  // ===== Rendering Components Setup =====
  // screens component
  const screens = []
  if(props.screens){
    for (const [index, value] of props.screens.entries()) {
      screens.push(
        <img key={index} src={value[0]} alt={value[1]}/>
      )
    }
  }

  // links component
  const links = []
  if(props.links){
    for (const [index, value] of props.links.entries()) {
      links.push(
        <p key={index}><a href={value[0]} target="_blank" rel="noreferrer"> - {value[1]} </a></p>
      )
    }
  }

  return (
    <>

    <Link to="/portfolio-website" style={{textDecoration: 'none', color: 'black'}}>
      <div class="back-arrow">← home</div>
    </Link>

    <div
      class="work-content-box" 
      >
      
      <div class="work-title">
        {props.workTitle}
      </div>
      <div class="work-subtitle">
        {props.workSubtitle}
      </div>
      <div class="work-body">
        {props.workBody}
      </div>

      <div class="work-subtitle">
        various screens.
      </div>
      <div class="image-grid">
        {screens}
      </div>

      <div class="work-subtitle">
        check it out.
      </div>
      <div class="work-contact">
        {links}
      </div>

      <div class="next-button">
        <Link to={props.backLink} style={{textDecoration: 'none', color: 'black'}}>← back</Link>
        <span style={{textAlign: 'right'}}>
        <Link to={props.nextLink} style={{textDecoration: 'none', color: 'black'}}>next →</Link>
      </span></div>

    </div>

    <div class="pink_circle" style={circle_style}/>
    
    </>
  )

}

export default WorkTemp;