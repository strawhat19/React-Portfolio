import React, { Component } from 'react';
class Navigation extends React.Component {
    render() { 
        return <nav class="navigation">
                    <a href="./" class="home homeLink hoverLine" id="homeLink" title="Home"><i class="fas fa-home home"></i> | Home</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="About"><i class="fas fa-address-card"></i> | About</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="Portfolio"><i class="fas fa-project-diagram"></i> | Portfolio</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="Contact"><i class="fas fa-paper-plane"></i> | Contact</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="Resume"><i class="fas fa-file-contract"></i> | Resume</a>
                </nav>;
    }
}
 
export default Navigation;