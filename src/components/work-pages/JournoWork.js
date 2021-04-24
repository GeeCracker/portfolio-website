import React from 'react';

// import images
import creation from '../../assets/work/journo/journo-creation.png';
import login from '../../assets/work/journo/journo-login.png';
import profile from '../../assets/work/journo/journo-profile.png';
import text from '../../assets/work/journo/journo-text-creation.png';

import WorkTemp from './WorkTemplate';

// Rename component name to appropriate work title
function JournoWork() {
  return (
    <WorkTemp 
        workTitle = "journ-o"
        workSubtitle = "a streamlined journaling experience."
        workBody = {
            <>
              <p>Jan 2021</p>
              <p>Journ-o was developed during the 2021 QHacks hackathon at Queen’s University. Our idea was to create an application that would allow people to experience frictionless journaling. We wanted to make the journaling experience as painless as possible by reducing journal writing time from 20 minutes, down to less than 1.</p>
              <p>Journ-o is a web app the facilitates the generation of short, daily journals that are generated with the guidance of the user. The website asks the user a few simple questions, and a customized journal account of their day get generated and stored in out Firebase backend system. The user can come back anytime to read their past journal entries.</p>
              <p>My role in the development was primarily the design and implementation of the front-end for the web app. This was a great opportunity for me to practice my design ideation process. It was also another opportunity to get comfortable with Figma, which I now use all the time. Although we didn’t end up winning any awards, overall I would say it was a really good experience, and one of my most successful hackathons to date.</p>
              <p><i>Stack: React, Firebase</i></p>
            </>
        }
        screens = {
            [
                [login, "Screenshot of website login page."],
                [profile, "Screenshot of website profile page."],
                [creation, "Screenshot of website journal creation page."],
                [text, "Screenshot of website journal creation text question type."]
            ]
        }
        links = {
            [
                [
                  "https://github.com/GeeCracker/journ-o", 
                  "github"
                ],
                [
                  "https://devpost.com/software/journ-o?ref_content=user-portfolio&ref_feature=in_progress", 
                  "devpost listing"
                ],
                [
                  "https://www.figma.com/file/CxbggBBhXZGSb1s5nKlFzS/journ-o-QHacks2021?node-id=0%3A1", 
                  "figma design file"
                ]
            ]
        }
        backLink = "/work/olae" // replace with previous page
        nextLink = "/work/crambarry" // replace with next page
    />
  )

}

export default JournoWork;