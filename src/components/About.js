import './About.css';
import face from "../assets/face.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {

    return (
        <>

        <div class="about-name">
            Hi! I'm <Link style={{ textDecoration: 'none' }} to="/me"><span>Graham.</span></Link>
        </div>

        <div class="about-body">
            <p>I’m a second-year software development student at Queen’s University, expecting to graduate in 2023. I really like making stuff, especially apps and websites. Through my experiences working on various projects, I’ve discovered a passion for developing attractive and responsive front-end UIs. I am also a very organized developer; I love when codebases are tidy and well-documented.</p>
            <p>My journey into tech started in high school. My first exposure to any sort of development was learning about HTML and CSS in a business technologies class grade 10. Throughout high school, I learned more about web development and I honed my skills. I also started taking an interest in computer science, which led me to Queen’s Computing. During this time, I worked on several start-up projects with friends which introduced me to the world of entrepreneurship. This early exposure has led me down a path of working on lots of start-up projects with small teams. I really love the feeling when you are able to create something out of practically nothing, and modern development tools are an amazing way to make that happen.</p>
            <p>My favorite technologies to work with right now are JavaScript-based frameworks like React and React Native. A lot of my recent work has focused on web and mobile front-end development, but I’m interested in getting my hand on all sorts of things. My number one goal right now is to learn as much as I can about all sorts of technologies so that I can apply my knowledge in the future.</p>
        </div>

        <div class="about-body">
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
            </a>.
        </div>

        <motion.img 
            class="face" 
            src={face} 
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    marginLeft: -400
                },
                visible: {
                    marginLeft: 0
                }
            }}
        />

        </>
    )
}
