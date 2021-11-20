// import React, { Component } from 'react';
import React from "react";
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
import Homepage from './homepage';

function Navigation(page) {
    const {currentPage, setCurrentPage} = page;

    const renderPage = () => {
        switch (currentPage) {
            case 'homepage':
                return <Homepage />;
            case 'about':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <Homepage />;
        }
    }

        return (
        <nav class="navigation">
            <a onClick={() => renderPage(`homepage`)} class="home homeLink hoverLine" id="homepage" title="Home"><i class="fas fa-home home"></i> | Home</a>
            <a onClick={() => renderPage(`about`)} class="showScoresLink hoverLine" id="about" title="About"><i class="fas fa-address-card"></i> | About</a>
            <a onClick={() => renderPage(`portfolio`)} class="showScoresLink hoverLine" id="portfolio" title="Portfolio"><i class="fas fa-project-diagram"></i> | Portfolio</a>
            <a onClick={() => renderPage(`contact`)} class="showScoresLink hoverLine" id="contact" title="Contact"><i class="fas fa-paper-plane"></i> | Contact</a>
            <a onClick={() => renderPage(`resume`)} class="showScoresLink hoverLine" id="resume" title="Resume"><i class="fas fa-file-contract"></i> | Resume</a>
        </nav>
        );
    }
 
export default Navigation;