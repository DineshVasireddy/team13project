import React from 'react';

const Overview = () => {
    return (
        <section id="intro" className="main style1 dark fullscreen">
            <div className="overlay"></div>
            <div className="content" id='intro-content'>
                <header>
                    <h2>Overview</h2>
                </header>
                
                <h3>Introduction to DNS and BGP</h3>
                <h4>What is DNS?</h4>
                <p>
                    The Domain Name System (DNS) translates human-readable domain names into IP addresses, allowing users to access websites and services easily.
                </p>
                <h4>What is BGP?</h4>
                <p>
                    The Border Gateway Protocol (BGP) is the protocol used to exchange routing information between different Autonomous Systems (AS) on the Internet, ensuring data packets find the best path across networks.
                </p>

                <h3>Importance of Security Solutions</h3>
                <h4>Current Landscape</h4>
                <p>
                    The Internet relies heavily on DNS and BGP for its functionality, making them prime targets for attackers. Security breaches can lead to severe disruptions, data theft, and loss of trust in online services.
                </p>
                <h4>Growing Threats</h4>
                <p>
                    As more businesses and individuals depend on the Internet, the risks associated with unsecured DNS and BGP protocols increase, necessitating effective security measures.
                </p>

                <footer>
                    <a href="#two-content" className="button style2 down">More</a>
                </footer>
            </div>
        </section>
    );
};

export default Overview;