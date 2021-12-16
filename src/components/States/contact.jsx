import React from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Contact({currentState, changeCurrentState, username, changeUsername}) { 

        function userChange() {
            changeUsername(document.querySelector(`#usernameField`).value)
        }
        
        return (
        <div id="contentContainer" class="contentContainer contain contact">
            <div className="innerContent2">
                <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} username={username} changeUsername={changeUsername} />
                <div class="content rtl">
                    <div className={`innerContent ltr`}>
                        <h2 className={`react`}><i class="fas fa-paper-plane"></i> <span class="slashes">//</span> <span class="skinny">Get In</span> Touch</h2>
                        <p class="spacer">Get in touch with me.</p>
                        <SkillsList />
                        <button class="gameButton transition">Get in Touch</button>
                        <form onSubmit={() => userChange()}>
                            <input id="usernameField" type="text" placeholder={username}/>
                            <button type="submit" class="gameButton transition">Get in Touch</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default Contact;