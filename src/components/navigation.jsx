import React from "react";

function Navigation({ currentPage, changeCurrentPage }) {
    return (
    <nav className={currentPage}>
        <a onClick={() => changeCurrentPage('homepage')} class="home homeLink hoverLine" id="homepage" title="Home"><i class="fas fa-home home"></i> | Home</a>
        <a onClick={() => changeCurrentPage('about')} class="showScoresLink hoverLine" id="about" title="About"><i class="fas fa-address-card"></i> | About</a>
        <a onClick={() => changeCurrentPage('portfolio')} class="showScoresLink hoverLine" id="portfolio" title="Portfolio"><i class="fas fa-project-diagram"></i> | Portfolio</a>
        <a onClick={() => changeCurrentPage('contact')} class="showScoresLink hoverLine" id="contact" title="Contact"><i class="fas fa-paper-plane"></i> | Contact</a>
        <a onClick={() => changeCurrentPage('resume')} class="showScoresLink hoverLine" id="resume" title="Resume"><i class="fas fa-file-contract"></i> | Resume</a>
    </nav>
    );
}
 
export default Navigation;