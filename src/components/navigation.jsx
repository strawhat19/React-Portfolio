import React from "react";

function Navigation({currentPage, changeCurrentPage}, classes) {
    classes = `black ${currentPage}`;

    function homeState() {
        changeCurrentPage('homepage');
    }
    function aboutState() {
        changeCurrentPage('about');
    }
    function portfolioState() {
        changeCurrentPage('portfolio');
    }
    function contactState() {
        changeCurrentPage('contact');
    }
    function resumeState() {
        changeCurrentPage('resume');
    }

    return (
    <nav className={classes}>
        <a onClick={() => homeState()} class="home homeLink hoverLine" id="homepage" title="Home"><i class="fas fa-home home"></i> | Home</a>
        <a onClick={() => aboutState()} class="navLink hoverLine" id="about" title="About"><i class="fas fa-address-card"></i> | About</a>
        <a onClick={() => portfolioState()} class="navLink hoverLine" id="portfolio" title="Portfolio"><i class="fas fa-project-diagram"></i> | Portfolio</a>
        <a onClick={() => contactState()} class="navLink hoverLine" id="contact" title="Contact"><i class="fas fa-paper-plane"></i> | Contact</a>
        <a onClick={() => resumeState()} class="navLink hoverLine" id="resume" title="Resume"><i class="fas fa-file-contract"></i> | Resume</a>
    </nav>
    );
}
 
export default Navigation;