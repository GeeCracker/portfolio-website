import React from 'react';

// import images
import classroom from '../../assets/work/crambarry/crambarry-classroom.png';
import landing from '../../assets/work/crambarry/crambarry-landing.png';
import opening from '../../assets/work/crambarry/crambarry-opening.png';

import WorkTemp from './WorkTemplate';

function CramWork() {
  return (
    <WorkTemp 
        workTitle = "Crambarry"
        workSubtitle = "a gameified studying web platform."
        workBody = {
            <>
                <p>Jan 2019 - Apr 2019</p>
                <p>This was a small team project I did towards the end of high school. The goal was to create a webapp which provided online chatrooms for the purpose of creating study group-chats to replace using Instagram. The goal was to provide more specific useful features for people to use. The site offered built-in flashcards, quiz creation, and content hosting for all the groups, as well as the group chatbox. The bonus was a customizable avatar that you could unlock cosmetics for by spending time on the website. This was to incentivise people to keep coming back, and to use the services the site had to offer.</p>
                <p>My role was to create all the cosmetic items that people could unlock and customize. I created the graphics and animations, and advised on the general look of the site.</p>
            </>
        }
        screens = {
            [
                [landing, "Screenshot of the website landing page."],
                [opening, "Screenshot of the website's box opening page."],
                [classroom, "Screenshot of the website's classroom page."]
            ]
        }
        links = {
            [
                [false, "Unfortunately support was discontinued in early 2021."]
            ]
        }
        backLink = "/work/journo" // replace with previous page
        nextLink = "/work/loop" // replace with next page
    />
  )

}

export default CramWork;