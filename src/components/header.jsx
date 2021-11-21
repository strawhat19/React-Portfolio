import React from 'react';
import Navigation from './navigation';
import Title from './title';

function Header({ currentState, changeCurrentState }) {
    return  (
    <header class="topbar">
        <Title />
        <Navigation currentState={currentState} changeCurrentState={changeCurrentState} />
    </header>
    );
}
 
export default Header;