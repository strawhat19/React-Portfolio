import React, {useState} from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Homepage({currentState, changeCurrentState, username, changeUsername}) {

    function aboutState() {
        changeCurrentState('aboutPage');
    }
    function portfolioState() {
        changeCurrentState('portfolioPage');
    }
    function contactState() {
        changeCurrentState('contactPage');
    }
    function resumeState() {
        changeCurrentState('resumePage');
    }

    return (
    <div id="contentContainer" class="contentContainer contain homepage">
        <div className="innerContent2">
            <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} username={username} changeUsername={changeUsername} />
            <div class="content rtl">
                <div className={`innerContent ltr`}>
                    <h2 className={`react`}><i class="fas fa-home home"></i> <span class="slashes">//</span> <span class="skinny">Home</span> Page</h2>
                    <p class="spacer">Welcome to my React.js showcase and portfolio. Feel free to navigate to any of the following sections:</p>
                    <div className={`navButtons`}>
                        <a className="navButton" onClick={() => aboutState()} title={`About`}>
                            <span className={`innerContent`}>
                                <i class="fas fa-address-card"></i> About Me    
                            </span>
                        </a>
                        <a className="navButton" onClick={() => portfolioState()} title={`Portfolio`}>
                            <span className={`innerContent`}>
                                <i class="fas fa-project-diagram"></i> My Portfolio    
                            </span>
                        </a>
                        <a className="navButton" onClick={() => contactState()} title={`Contact`}>
                            <span className={`innerContent`}>
                                <i class="fas fa-paper-plane"></i> Contact Me    
                            </span>
                        </a>
                        <a className="navButton" onClick={() => resumeState()} title={`Resume`}>
                            <span className={`innerContent`}>
                                <i class="fas fa-file-contract"></i> My Resume    
                            </span>
                        </a>
                    </div>
                    <h2 className={`react`}><i class="fas fa-list-ul"></i> <span class="slashes">//</span> <span class="skinny">My</span> Skills</h2>
                    <SkillsList />
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Homepage;