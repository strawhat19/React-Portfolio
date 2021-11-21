import React, { useState } from 'react';
import Header from './header';
import Homepage from './homepage';
import About from './about';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from './footer';

function Main() { 

        const [currentState, setCurrentState] = useState('homePage');

        const handleState = () => {
            switch (currentState) {
                case 'homePage':
                    return <Homepage />;
                case 'aboutPage':
                    return <About />;
                case 'portfolioPage':
                    return <Portfolio />;
                case 'contactPage':
                    return <Contact />;
                case 'resumePage':
                    return <Resume />;
                default:
                    return <Homepage />;
            }
        }

        const changeCurrentState = (state) => setCurrentState(state);

        return (
        <main className="app">
        <Header currentState={currentState} changeCurrentState={changeCurrentState} />
            {handleState()}
        <Footer />
        </main>
        );
    }
 
export default Main;