import React, { Component } from 'react';
import { useState } from 'react';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
import Homepage from './homepage';

function Main(page) { 
        const [currentPage, setCurrentPage] = useState('homepage');

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
        <main>
            {renderPage()}
        </main>
        );
    }
 
export default Main;