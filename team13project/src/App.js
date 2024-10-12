import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Overview from './components/Overview';
import References from './components/References';
import Findings from './components/Findings';
import Taxonomy from './components/Taxonomy';
import Contact from './components/Contact';
import './main.css'; // Make sure to add your styles

const App = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <header id="header">
                <h1>Survey on DNS and BGT Security Solutions</h1>
                <nav>
                    <ul>
                        <li><Link to="#" onClick={() => scrollToSection('overview')}>Overview</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('findings')}>Findings</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('taxonomy')}>Taxonomy</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('references')}>References</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('contact')}>Team</Link></li>
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
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </Router>
    );
};

export default App;