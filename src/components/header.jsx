import React from 'react';
import Navigation from './navigation';
import Title from './title';

function Header({ currentPage, changeCurrentPage }) {
    return  (
    <header class="topbar">
        <Title />
        <Navigation currentPage={currentPage} changeCurrentPage={changeCurrentPage} />
    </header>
    );
}
 
export default Header;