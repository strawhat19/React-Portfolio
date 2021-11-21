import React, {useState} from 'react';

function ContentTitle() {

    const handleColor = (currentColor) => {
        currentColor = document.querySelector('footer').classList[1];
        console.log(currentColor);

        // let blacks = document.querySelectorAll('.black');
        // let animationStroke = document.querySelector('#animation path[fill="rgb(15,204,206)"]');
        // let contentContainer = document.querySelector(`.contentContainer`);

        // const colorChange = (currentColor) => {
        //     blacks.forEach(element => {
        //         element.style.background = '#01154f';
        //     })
    
        //     animationStroke.stroke = '#01154f';
        //     contentContainer.style.background = '#01154f';
        // }

        // switch(currentColor) {
        //     case 'black':
        //         colorChange(currentColor);
        //         break;
        //     case 'navy':
        //         colorChange(currentColor);
        //         break;
        // }
    }

    const handleColorChange = (bodyBG, currentColor) => {
        bodyBG = document.body.style.background; 

        switch(bodyBG) {
            case 'rgb(31, 52, 58)': // Dark Blue
                return document.body.style.background = '#033ee3';
            case 'rgb(3, 62, 227)': // Light Blue
                return document.body.style.background = '#1f343a';
        }
    }

    return (
        <div class="contentContainerTitle">
            <h1 class="spacer"><i class="fab fa-react"></i> | React <span class="boldSecondary">Portfolio</span></h1>
            <div class="iconContainer outerIconContainer">
                <a onClick={handleColorChange} class="showScoresLink hoverLine" id="showScoresLink" title="Designer"><i class="fas fa-pencil-ruler"></i> | Designer</a>
                <a onClick={handleColorChange} class="showScoresLink hoverLine" id="showScoresLink" title="Developer"><i class="fas fa-code"></i> | Developer</a>
            </div>
        </div>
    );
}
 
export default ContentTitle;