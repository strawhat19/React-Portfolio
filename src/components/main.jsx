import React, { useState } from 'react';
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

        const changeCurrentPage = (page) => setCurrentPage(page);

        return (
        <main>
        <Header currentPage={currentPage} changeCurrentPage={changeCurrentPage}/>
            {renderPage()}
        </main>
        );
    }
 
export default Main;