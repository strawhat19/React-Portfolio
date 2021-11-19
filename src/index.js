import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const navigation = 
<div class="navigation">
        <nav class="nav-menu" id="navigation">
            <li class="nav-link Home"><a href="./" title="Home"><i class="fas fa-home"></i> RAKIB <span class="slashes">//</span> AHMED</a></li>
            <div class="social-links" id="socialLinksMain">
                <a href="https://www.instagram.com/piratechsatl/" class="nav-link instagramLink" title="@Piratechsatl" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rakib-ahmed19/" class="nav-link linkedInLink" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:rahmed@piratechs.com" class="nav-link emailLink" title="Email"  target="_blank"><i class="fas fa-envelope"></i></a>
                <a href="https://piratechs.com/" class="nav-link piratechsLink" title="Piratechs" target="_blank"><i class="fas fa-share-alt-square"></i></a>
                <a href="https://github.com/strawhat19" class="nav-link githubLink" title="Github" target="_blank"><i class="fab fa-github"></i></a>
            </div>

            <div class="mobile-menu-option" id="mobile-menu-option">
                <div id="menuToggle" onclick="openMobileMenu()">
                    <a id="openMenuToggler" class="openMenuToggler">
                        <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                        <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                        <span id="menuTogglerSpan" class="menuTogglerSpan"></span>
                    </a>
                </div>
                
                <ul class="desktop-menu-option mobile-Menu" id="desktopMenu">
                    <li class="nav-link About"><a href="#About">About <span class="slashes">//</span> <i class="fas fa-user-edit"></i></a></li>
                    <li class="nav-link resumeLink"><a href="#Resume">Resume <span class="slashes">//</span> <i class="fas fa-file"></i></a></li>
                    <li class="nav-link Projects"><a href="#Projects">Projects <span class="slashes">//</span> <i class="fas        fa-project-diagram"></i></a></li>
                    <li class="nav-link Contact"><a href="#Contact">Contact <span class="slashes">//</span> <i class="fas fa-paper-plane"></i></a></li>
                        <div class="social-links" id="socialLinks">
                            <a href="https://www.instagram.com/piratechsatl/" class="nav-link instagramLink" title="@Piratechsatl" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/rakib-ahmed19/" class="nav-link linkedInLink" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="mailto:rahmed@piratechs.com" class="nav-link emailLink" title="Email"  target="_blank"><i class="fas fa-envelope"></i></a>
                            <a href="https://piratechs.com/" class="nav-link piratechsLink" title="Piratechs" target="_blank"><i class="fas fa-share-alt-square"></i></a>
                            <a href="https://github.com/strawhat19" class="nav-link githubLink" title="Github" target="_blank"><i class="fab fa-github"></i></a>
                        </div>
                </ul>
            </div>
        </nav>
    </div>;

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  navigation,
  document.getElementById('root')
);


const element2 = <h1>Hello</h1>;

console.log(navigation);
console.log(element2);