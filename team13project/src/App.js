import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Overview from './components/Overview';
import References from './components/References';
import Findings from './components/Findings';
import Taxonomy from './components/Taxonomy';
import Contact from './components/Contact';
import Conclusion from './components/Conclusion'
import './main.css'; // Make sure to add your styles

const App = () => {
    const scrollToSection = (id, contentId) => {
        const section = document.getElementById(id);
        const content = section ? section.querySelector(`#${contentId}`) : null;

        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
        } else if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <header id="header">
                <h1>Survey on DNS and BGT Security Solutions</h1>
                <nav>
                    <ul>
                    <li><Link to="#" onClick={() => scrollToSection('overview', 'intro-content')}>Overview</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('findings', 'two-content')}>Findings</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('taxonomy', 'work-content')}>Taxonomy</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('references', 'one-content')}>References</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('conclusion', 'conclusion-content')}>Conclusion</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('contact', 'contact-content')}>Team</Link></li>
                        
                    </ul>
                </nav>
            </header>
            <main>
                <section id="overview">
                    <Overview />
                </section>
                <section id="findings">
                    <Findings />
                </section>
                <section id="taxonomy">
                    <Taxonomy />
                </section>
                <section id="references">
                    <References />
                </section>
                <section id="conclusion">
                    <Conclusion />
                </section>
                <section id="contact">
                    <Contact />
                </section>
                
            </main>
        </Router>
    );
};

export default App;