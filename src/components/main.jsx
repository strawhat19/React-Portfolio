import React, { Component } from 'react';
import { useState } from 'react';
import Header from './header';
import Homepage from './homepage';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';

function Main() { 
        const [currentPage, setCurrentPage] = useState('homepage');

        const renderPage = () => {
            switch (currentPage) {
                case 'homepage':
                    return <Homepage page={"homepage"} />;
                case 'about':
                    return <About page={"about"} />;
                case 'portfolio':
                    return <Portfolio page={"portfolio"} />;
                case 'contact':
                    return <Contact page={"contact"} />;
                case 'resume':
                    return <Resume page={"resume"} />;
                default:
                    return <Homepage page={"homepage"} />;
            }
        }

        const changeCurrentPage = (page) => setCurrentPage(page);

        return (
        <main>
        <Header currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
            {renderPage()}
        </main>
        );
    }
 
export default Main;