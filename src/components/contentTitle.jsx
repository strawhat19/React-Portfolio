import React, {useState} from 'react';

function ContentTitle() {

    const handleColorChange = (bodyBG) => {
        bodyBG = document.body.className;

        switch(bodyBG) {
            case 'developer':
                switchLight();
                break;
            case 'designer':
                switchDark();
                break;
        }

        function switchLight() {
            let animation = document.querySelector('#animation');
            let blacks = document.querySelectorAll('.black');
            let contentContainer = document.querySelector(`.contentContainer`);
            contentContainer.style.background = '#01154f';
            document.body.style.background = 'rgb(3, 62, 227)';
            document.body.classList.remove('developer');
            document.body.classList.add('designer');
            animation.classList.remove('dark');
            animation.classList.add('light');
            blacks.forEach(element => {
                element.style.background = '#01154f';
            })
        }

        function switchDark() {
            let animation = document.querySelector('#animation');
            let blacks = document.querySelectorAll('.black');
            let contentContainer = document.querySelector(`.contentContainer`);
            contentContainer.style.background = '#000';
            document.body.style.background = 'rgb(31, 52, 58)';
            document.body.classList.remove('designer');
            document.body.classList.add('developer');
            animation.classList.remove('light');
            animation.classList.add('dark');
            blacks.forEach(element => {
                element.style.background = '#000';
            })
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