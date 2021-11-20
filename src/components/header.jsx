import React, { Component } from 'react';
import Navigation from './navigation';
import Title from './title';

function Header(page) {
    const {currentPage, setCurrentPage} = page;

    return  (
    <header class="topbar">
        <Title />
        <Navigation />
    </header>
    );
}
 
export default Header;