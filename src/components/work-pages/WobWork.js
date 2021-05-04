import React from 'react';

// import images
import onboard from '../../assets/work/wob/wob-onboard.png';
import screen from '../../assets/work/wob/wob-screen.png';
import menu from '../../assets/work/wob/wob-menu.png';
import newpost from '../../assets/work/wob/wob-newpost.png';
import onboard2 from '../../assets/work/wob/wob-onboard2.png';
import pin from '../../assets/work/wob/wob-pin.png';
import post from '../../assets/work/wob/wob-post.png';
import posts from '../../assets/work/wob/wob-posts.png';
// import wow from '../../assets/work/wob/wobbly_wow.png';

import WorkTemp from './WorkTemplate';

// Rename component name to appropriate work title
function WobWork() {
  return (
    <WorkTemp 
        workTitle = "WOB"
        workSubtitle = "a geography-based anonymous social media."
        workBody = {
            <>
              <p>Sep 2019 - Aug 2020</p>
              <p>For the 2019-2020 season of QTMA, my team wanted to create something that didn’t exist in the world of social media. We identified a lack of authenticity and personal connection in the content posted on modern social media apps. Our solution was WOB.</p>
              <p>Posts on WOB are directly linked to your geographical location, users can only see posts within a set radius of their location, and all posts are entirely anonymous. The goal was to create an environment where all the content you see is meaningful to you, while also encouraging the creation of authentic content through the security of anonymity.</p>
              <p>My primary role in the development process was the design and implementation of the UI. I worked with React Native and Node to coordinate various pre-built and custom components. It was my first time working with these technologies, so I was able to learn a lot from the experience. As a result, JavaScript frameworks are my favorite technologies to work with, especially React Native.</p>
              <p><i>Stack: React Native, Python</i></p>
            </>
        }
        screens = {
            [
                [
                  onboard, 
                  "WOB onboarding screen 1."
                ],
                [
                  onboard2, 
                  "WOB onboarding screen 2."
                ],
                [
                  pin,
                  "WOB login pin screen."
                ],
                [
                  screen,
                  "WOB main map screen."
                ],
                [
                  posts,
                  "Main map screen with a pin selection."
                ],
                [
                  post,
                  "WOB post popup."
                ],
                [
                  menu,
                  "WOB main menu."
                ],
                [
                  newpost,
                  "WOB new post creation screen."
                ],
            ]
        }
        links = {
            [
                [
                    "https://qtma.ca/wob.html", 
                    "QTMA website posting"
                ]
            ]
        }
        nextLink = "/work/olae" // replace with next page
    />
  )

}

export default WobWork;