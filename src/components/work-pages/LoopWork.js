import React from 'react';

// import images
import feed1 from '../../assets/work/loop/loop-feed1.png';
import feed2 from '../../assets/work/loop/loop-feed2.png';
import feed3 from '../../assets/work/loop/loop-feed3.png';
import dropdown from '../../assets/work/loop/loop-dropdown.png';
import makemenu from '../../assets/work/loop/loop-makemenu.png';
import newpost from '../../assets/work/loop/loop-newpost.png';
import notifs from '../../assets/work/loop/loop-notifications.png';
import post from '../../assets/work/loop/loop-post.png';
import profile from '../../assets/work/loop/loop-profile.png';

import WorkTemp from './WorkTemplate';

// Rename component name to appropriate work title
function LoopWork() {
  return (
    <WorkTemp 
        workTitle = "Loop"
        workSubtitle = "a subversion of the traditional social media platform."
        workBody = {
            <>
              <p>Jun 2020 - Present</p>
              <p>For the 2020-2021 QTMA season, my team worked to develop a better social media app. Loop has seamless integrations with third party APIs to allow for a huge range of enriched content, from Spotify playlists to Uber Eats recommendations, our app infrastructure facilities lots of sharing. Users create Loops with their friends to chat and share content without filters of internet points in the form of likes. The point was to create a platform that could be used to actually socialize with your friends.</p>
              <p>I was a developer for the project, and I worked on many parts of the app from integration front-end UIs to designing the infrastructure for the Loop system in the back end. It was great to work with my team as people’s varying skillsets worked to improve the overall final product.</p>
              <p><i>Stack: React Native, Firebase, GetStreamAPI</i></p>
            </>
        }
        screens = {
            [
                [
                  feed3, 
                  "Loop feed screen."
                ],
                [
                  notifs, 
                  "Notification screen."
                ],
                [
                  feed1, 
                  "Loop feed screen 2."
                ],
                [
                  dropdown, 
                  "Loop selection dropdown menu."
                ],
                [
                  feed2, 
                  "Loop feed screen 3."
                ],
                [
                  makemenu, 
                  "Creation navigation popup menu."
                ],
                [
                  newpost, 
                  "New post creation screen."
                ],
                [
                  post, 
                  "Loop single post screen."
                ],
                [
                  profile, 
                  "Loop profile screen."
                ],
            ]
        }
        links = {
            [
                [
                  "http://www.getloopapp.ca/", 
                    "prelaunch website"
                ]
            ]
        }
        backLink = "/work/crambarry" // replace with previous page
    />
  )

}

export default LoopWork;