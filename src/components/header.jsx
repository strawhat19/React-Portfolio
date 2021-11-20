import React, { Component } from 'react';
import Navigation from './navigation';
import Title from './title';

class Header extends React.Component {
    // state = {}
    render() { 
        return  <header class="topbar">
                    <Title />
                    <Navigation />
                </header>;
    }
}
 
export default Header;