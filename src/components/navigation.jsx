import React, { Component } from 'react';
class Navigation extends React.Component {
    render() { 
        return <nav class="navigation">
                    <a href="./" class="home homeLink hoverLine" id="homeLink" title="Home"><i class="fas fa-home home"></i> | Home</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="High Scores"><i class="fas fa-signal"></i> | About</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="High Scores"><i class="fas fa-signal"></i> | Portfolio</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="High Scores"><i class="fas fa-signal"></i> | Contact</a>
                    <a class="showScoresLink hoverLine" id="showScoresLink" title="High Scores"><i class="fas fa-signal"></i> | Resume</a>
                </nav>;
    }
}
 
export default Navigation;