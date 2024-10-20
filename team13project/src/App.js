import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Overview from './components/Overview';
import References from './components/References';
import Findings from './components/Findings';
import Taxonomy from './components/Taxonomy';
import Contact from './components/Contact';
import Conclusion from './components/Conclusion';
import './main.css'; // Ensure your styles are imported

const App = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const scrollToSection = (id, contentId) => {
        const section = document.getElementById(id);
        const content = section ? section.querySelector(`#${contentId}`) : null;

        if (content) {
            content.scrollIntoView({ behavior: 'smooth' });
            toggleDropdown();
        } else if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            toggleDropdown();
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const closeDropdown = () => {
        if (isDropdownOpen){
            setDropdownOpen(!isDropdownOpen);
        }
        
    };
    

    return (
        <Router>
            <header id="header" onClick={closeDropdown}>
                <h1>Survey on DNS and BGP Security Solutions</h1>
                <nav>
                    <div className="dropdown" style={{position: 'absolute', visibility:'hidden'}}>
                        <button className="dropdown-toggle" style={{background: 'inherit'}} onClick={toggleDropdown}>
                            List of Contents
                        </button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><Link to="#" onClick={() => scrollToSection('overview', 'intro-content')}>Overview</Link></li>
                                <li><Link to="#" onClick={() => scrollToSection('findings', 'two-content')}>Findings</Link></li>
                                <li><Link to="#" onClick={() => scrollToSection('taxonomy', 'work-content')}>Taxonomy</Link></li>
                                <li><Link to="#" onClick={() => scrollToSection('references', 'one-content')}>References</Link></li>
                                <li><Link to="#" onClick={() => scrollToSection('conclusion', 'conclusion-content')}>Conclusion</Link></li>
                                <li><Link to="#" onClick={() => scrollToSection('contact', 'contact-content')}>Team</Link></li>
                            </ul>
                        )}
                    </div>
                    <ul className="nav-links">
                        <li><Link to="#" onClick={() => scrollToSection('overview', 'intro-content')}>Overview</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('findings', 'two-content')}>Findings</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('taxonomy', 'work-content')}>Taxonomy</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('references', 'one-content')}>References</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('conclusion', 'conclusion-content')}>Conclusion</Link></li>
                        <li><Link to="#" onClick={() => scrollToSection('contact', 'contact-content')}>Team</Link></li>
                    </ul>
                </nav>
            </header>
            <main onClick={closeDropdown}>
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