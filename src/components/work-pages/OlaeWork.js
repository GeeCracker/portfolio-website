import React from 'react';

// import images
import champ from '../../assets/work/olae/olae-champions.png';
import landing from '../../assets/work/olae/olae-landing.png';
import stats from '../../assets/work/olae/olae-stats.png';
import teams from '../../assets/work/olae/olae-teams.png';

import WorkTemp from './WorkTemplate';

// Rename component name to appropriate work title
function OlaeWork() {
  return (
    <WorkTemp 
        workTitle = "OLAE"
        workSubtitle = "Canada's first highschool esports organization."
        workBody = {
            <>
              <p>Jun 2017 - Jun 2019</p>
              <p>The Ontario League of Associated Esports is one of my proudest achievements from high school. This was an independent start-up project ideated by my classmate Bryan Ling. The goal was to provide Canadian high school students a platform to play and compete in professional quality, organized esports events. Our team worked with school administration to establish recognized clubs in each participating school. The project consisted of developing a highly functional website, organizing participants into live brackets, coordinating and managing game servers, and tracking individual statistics.</p>
              <p>I was directly in charge of the game servers for one of the games we were running. I can still remember the immense pride I felt when the first game started, and all participants were successfully in the server playing the game. Being a part of this project was a major reason I developed a strong interest in doing start-up work. Having a major role in something, and seeing it come to life is such a fantastic feeling. I want to be apart of more projects like this in the future.</p>
              <p>Today the platform has over a hundred active participants from a collection of schools across Ontario, with plans to expand further in the future.</p>
            </>
        }
        screens = {
            [
                [
                  landing, 
                  "OLAE website landing screen."
                ],
                [
                  teams, 
                  "OLAE participating teams list."
                ],
                [
                  stats,
                  "OLAE website seasion stats page."
                ],
                [
                  champ,
                  "OLAE website season champion page."
                ],
            ]
        }
        links = {
            [
                [
                    "https://olae.ca/", 
                    "website"
                ]
            ]
        }
        backLink = "/work/wob" // replace with previous page
        nextLink = "/work/journo" // replace with next page
    />
  )

}

export default OlaeWork;