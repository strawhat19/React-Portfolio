import React, { Component } from 'react';

function About() {
        return (
        <div class="quizBox contain about">
                    <div class="quizBoxTitle">
                        <h1 class="spacer"><i class="fab fa-react"></i> | React <span class="boldSecondary">Portfolio</span></h1>
                        <div class="iconContainer outerIconContainer">
                            <a class="showScoresLink hoverLine" id="showScoresLink" title="Designer"><i class="fas fa-pencil-ruler"></i> | Designer</a>
                            <a class="showScoresLink hoverLine" id="showScoresLink" title="Developer"><i class="fas fa-code"></i> | Developer</a>
                        </div>
                    </div>
                    <div class="content">
                        <div class="lineSep"></div>
                        <h2>About</h2>
                        <p class="spacer">Hey I'm Rakib Ahmed, but you can call me Ricky! I launched my first professional website in 2016. I Designed & Developed it for a prominent client in the entertainment industry. I was 19 years old… A lot has changed since then… Now, with amplified aesthetics from getting extremely familiar with all graphic design, web and coding, I learned how to design & develop cleaner sites in all platforms.</p>
                        <ul class="list-group">
                            <li class="list-item"><div class="html iconRow slashContainer"><i class="fab fa-html5"></i> <span class="slashes">//</span> HTML</div></li>
                            <li class="list-item"><div class="css iconRow slashContainer"><i class="fab fa-css3-alt"></i> <span class="slashes">//</span> CSS</div></li>
                            <li class="list-item"><div class="sass iconRow slashContainer"><i class="fab fa-sass"></i> <span class="slashes">//</span> SASS</div></li>
                            <li class="list-item"><div class="js iconRow slashContainer"><i class="fab fa-js-square"></i> <span class="slashes">//</span> JS</div></li>
                            <li class="list-item"><div class="node iconRow slashContainer"><i class="fab fa-node-js"></i> <span class="slashes">//</span> Node</div></li>
                            <li class="list-item"><div class="sql iconRow slashContainer"><i class="fas fa-database"></i> <span class="slashes">//</span> SQL</div></li>
                            <li class="list-item"><div class="mongo iconRow slashContainer"><i class="fas fa-server"></i> <span class="slashes">//</span> MongoDB</div></li>
                            <li class="list-item"><div class="react iconRow slashContainer"><i class="fab fa-react"></i> <span class="slashes">//</span> React</div></li>
                            <li class="list-item"><div class="swift iconRow slashContainer"><i class="fab fa-swift"></i> <span class="slashes">//</span> Swift</div></li>
                            <li class="list-item"><div class="git iconRow slashContainer"><i class="fab fa-git-alt"></i> <span class="slashes">//</span> Git</div></li>
                            <li class="list-item"><div class="unity iconRow slashContainer"><i class="fab fa-unity"></i> <span class="slashes">//</span> Unity</div></li>
                        </ul>
                        <button class="gameButton transition">More Info</button>
                    </div>
                </div>
        );
    }
 
export default About;