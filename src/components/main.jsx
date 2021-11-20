import React, { Component } from 'react';
class Main extends React.Component {
    render() { 
        return     <main class="quizContainer contain">
                        <div class="quizBox contain">
                            <div class="quizBoxTitle">
                                <h1 class="spacer">Coding <span class="boldSecondary">Quiz</span></h1>
                                <div class="iconContainer outerIconContainer">
                                    <div class="iconContainer" id="itemContainer">Time Remaining: 
                                        <div class="customIcon transition timeRemaining" title="Time"></div>
                                    </div>
                                    <div class="iconContainer" id="itemContainer">Total Points: 
                                        <div class="customIcon transition userPoints"title="Points">0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="lineSep"></div>
                            <h2>Javascript</h2>
                            <p class="spacer">This is a <span class="totalQuestions" title="Total Questions"></span> question timed quiz to assess your knowledge of Javascript! The questions will cover topics such as:</p>
                            <ul class="list-group">
                                <li class="list-item">Variables</li>
                                <li class="list-item">Event Listeners</li>
                                <li class="list-item">DOM Maniplutaion</li>
                                <li class="list-item">Functions</li>
                                <li class="list-item">Local Storage</li>
                                <li class="list-item">Query Selector</li>
                                <li class="list-item">Arrays</li>
                                <li class="list-item">Loops</li>
                                <li class="list-item">Methods</li>
                                <li class="list-item">Objects</li>
                                <li class="list-item">Data Types</li>
                                <li class="list-item">Create Element</li>
                            </ul>
                            <button class="gameButton transition">Click Here To Begin Game</button>
                        </div>
                    </main>;
    }
}
 
export default Main;