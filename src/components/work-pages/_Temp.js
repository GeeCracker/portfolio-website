import React from 'react';

// import images
import champ from '../../assets/work/olae/olae-champions.png';
import landing from '../../assets/work/olae/olae-landing.png';

import WorkTemp from './WorkTemplate';

// Rename component name to appropriate work title
function Temp() {
  return (
    <WorkTemp 
        workTitle = "Work Title"
        workSubtitle = "Work subtitle, catchy phrase."
        workBody = {
            <>
                <p>Text text text text.</p>
                <p>Text text text text.</p>
                <p>Text text text text.</p>
            </>
        }
        screens = {
            [
                [champ, "alt text"],
                [landing, "alt text"]
            ]
        }
        links = {
            [
                ["#external-link", "external link"],
                ["#external-link", "external link two"]
            ]
        }
        backLink = "/work/wob" // replace with previous page
        nextLink = "/work/loop" // replace with next page
    />
  )

}

export default Temp;