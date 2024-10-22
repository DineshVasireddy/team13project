import React, { useState } from 'react';
import chiragImg from '../images/Chiraggupta.jpg';
import sushmaImg from '../images/Sushmaveeravalli.jpg';
import karthikImg from '../images/Karthikmangineni.jpg';
import saidineshImg from '../images/Saidineshvasireddy.jpg';
import pranithaImg from '../images/Pranithapadala.jpg'

const developers = [
    { 
        id: 1, 
        name: 'Sai Dinesh Vasireddy', 
        email: 'saidinesh.vasireddy@slu.edu', 
        image: saidineshImg,
        role: 'Website Developer',
        contribution: 'Front-end (UI) Development using Reactjs',
        bio: 'Graduate Student at SLU from Computer Science and Engineering Department with prior work experience of 2 Years as Software Engineer and Full Stack Web Developer.',
        papersWorked: [
            <a href="https://ieeexplore.ieee.org/document/5473881">Securing BGP — A Literature Survey</a>,
            <a href="https://i.blackhat.com/BH-US-23/Presentations/US-23-dosSantos-Route-to-Bugs-Analyzing-the-Security-of-BGP.pdf">BGP Vulnerability Presentations and Analysis</a>,
            <a href="https://arxiv.org/pdf/2105.02346">Estimating the Impact of BGP Prefix Hijacking</a>,
            <a href="https://labs.apnic.net/index.php/2021/08/03/a-survey-on-securing-inter-domain-routing-part-2-approaches-to-securing-bgp/">A Survey on Securing Inter-Domain Routing Part 2 – Approaches to Securing BGP</a>,
            <a href="https://ieeexplore.ieee.org/document/8722413/references#references">Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness </a>
        ],
        contact: {
            github: 'https://github.com/DineshVasireddy', 
            linkedin: 'https://www.linkedin.com/in/sai-dinesh-vasireddy/', 
            githubIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png', 
            linkedinIcon: 'https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc' 
        }
    },
    { 
        id: 2, 
        name: 'Chirag Gupta', 
        email: 'chirag.gupta@slu.edu', 
        image: chiragImg,
        role: 'Website Developer',
        contribution: 'Front-end (UI) Development using Reactjs',
        bio: 'Current graduate student in Computer Science and Engineering at Saint Louis University. Passionate about Development and design new things.',
        papersWorked: [
            <a href="https://www.cerias.purdue.edu/assets/pdf/bibtex_archive/2011-15.pdf">:Improving Internet Infrastructure: BGP Predictability and Cloud DNS Performance</a>,
            <a href="https://dl.acm.org/doi/10.1145/2663716.2663731">DNSSEC and Its Potential for DDoS Attacks</a>,
            <a href="https://ieeexplore.ieee.org/document/10343534">Blockchain-Based DNS to Mitigate DDoS Attacks</a>,
            <a href="https://inria.hal.science/hal-01806063/document">A Blockchain-Based Architecture for Collaborative DDoS Mitigation with Smart Contracts</a>,
            <a href="https://arxiv.org/pdf/2410.02254v1">MTDNS: Moving Target Defense for Resilient DNS Infrastructure</a>
        ],
        contact: {
            github: 'https://github.com/Chirag2x', 
            linkedin: 'https://www.linkedin.com/in/chirag-gupta-3911961b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', 
            githubIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png',
            linkedinIcon: 'https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc'
        }
    },
    { 
        id: 3, 
        name: 'Sushma Veeravalli', 
        email: 'Sveeravalli@slu.edu', 
        image: sushmaImg,
        role: 'Content Validator',
        contribution: 'Validation of Content on Webpages and Testing (Bug detection)',
        bio: 'Graduate from computer science and engineering at Slu University with prior experience of 5+years as a Technical Recruiter and 6months as Application developer.',
        papersWorked: [
            <a href="https://arxiv.org/abs/2201.00900">A Survey on DNS Encryption: Current Development, Malware Misuse, and Inference Techniques</a>,
            <a href="https://ieeexplore.ieee.org/document/9065354">A Survey on DNS Security Issues and Mitigation Techniques</a>,
            <a href="https://ieeexplore.ieee.org/document/7866194">Survey on Domain Name System Security</a>,
            <a href="https://www.semanticscholar.org/paper/An-Inter-Domain-Attack-Mitigating-Solution-Akin-B%C3%BCk/3519c03706b0a35116692c6fe76695686fc93245#citing-papers">An Inter-Domain Attack Mitigating Solution</a>,
            <a href="https://www.oecd-ilibrary.org/docserver/285d7875-en.pdf?expires=1729043721&id=id&accname=guest&checksum=D6DF22AEDBC7934ECF4BFF3F3013E9D1">Security of Domain Name System (DNS).</a>
        ],
        contact: {
            github: 'https://github.com/SushmaVeeravalli8', 
            linkedin: 'https://www.linkedin.com/in/sushma-lisa-veeravalli-69341b14b/', 
            githubIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png',
            linkedinIcon: 'https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc'
        }
    },
    { 
        id: 4, 
        name: 'Karthik Mangineni', 
        email: 'kmangineni@slu.edu', 
        image: karthikImg,
        role: 'Content Validator',
        contribution: 'Validation of Content on Webpages and Testing (Bug detection)',
        bio: 'I am Karthik Mangineni, an enthusiastic software developer specializing in mobile app development with React Native. Currently pursuing a Master\'s in Computer Science at Saint Louis University, I have experience leading open-source projects and internships, and I am passionate about solving complex problems and enhancing user experiences.',
        papersWorked: [
            <a href="https://www.cs.princeton.edu/~jrex/papers/pieee09.pdf">A Survey of BGP Security Issues and Solutions</a>,
            <a href="https://dl.acm.org/doi/10.5555/850929.851984">Protecting BGP Routes to Top-Level DNS Servers</a>,
            <a href="https://ieeexplore.ieee.org/document/6595458">Securing BGP Against Spoofing Attacks</a>,
            <a href="https://ieeexplore.ieee.org/document/8594708">BGP with BGPsec: Attacks and Countermeasures</a>,
            <a href="https://ieeexplore.ieee.org/document/9153432">The Impact of DNS Insecurity on Time</a>
        ],
        contact: {
            github: 'https://github.com/rcAsironman', 
            linkedin: 'https://www.linkedin.com/in/karthik-mangineni-086a49234', 
            githubIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png',
            linkedinIcon: 'https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc'
        }
    },
    { 
        id: 5, 
        name: 'Pranitha Padala', 
        email: 'pranitha.padala@slu.edu', 
        image: pranithaImg,
        role: 'Reporting and Delivery Lead',
        contribution: 'Retesting and Design Changes, Resource Gathering and data gathering etc.',
        bio: 'Graduate student at saint louis university in computer science and engineering. Passionate about building and designing websites, with an interest in web development, programming, and emerging technologies.',
        papersWorked: [
            <a href="https://www.f5.com/labs/articles/cisotociso/bgp-dns-and-the-fragility-of-our-critical-systems">BGP, DNS, and the Fragility of our Critical Systems</a>,
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S014036641731068X">The state of affairs in BGP security: A survey of attacks and defenses</a>,
            <a href="https://web.cs.ucla.edu/~lixia/papers/03TPDS.pdf">Protecting BGP Routes to Top-Level DNS Servers</a>,
            <a href="https://crypto.ku.edu.tr/wp-content/uploads/2020/01/blockchain-backbone.pdf">Improvement of PKI, BGP, and DNS Using Blockchain: A Systematic Review</a>,
            <a href="https://aunetwork.org/the-role-of-dns-security-in-mitigating-cyber-threats-an-analysis-of-recent-attacks-and-recommended-strategies/">The role of DNS security in mitigating cyber threats: An analysis of recent attacks and recommended strategies</a>
        ],
        contact: {
            github: 'https://github.com/pranithapadala', 
            linkedin: 'http://linkedin.com/in/pranitha-padala-458539170', 
            githubIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png',
            linkedinIcon: 'https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc'
        }
    },
];

const Contact = () => {
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (developer) => {
        setModalData(developer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    };

    return (
        <section id="contact" className="main style3 secondary">
            <div className="overlay"></div> 
            <div className="content" id='contact-content'>
                <header>
                    <h2>Team</h2>
                    <p>Meet our team who worked on this web page related to the Survey on DNS and BGT Security Solutions.</p>
                </header>
                <div className="box">
                    <div className="developer-cards">
                        {developers.map(developer => (
                            <div 
                                key={developer.id} 
                                className="developer-card" 
                                onClick={() => openModal(developer)}
                            >
                                <img src={developer.image} alt={developer.name} className="profile-pic" />
                                <h3>{developer.name}</h3>
                            </div>
                        ))}
                    </div>
                    {isModalOpen && modalData && (
                        <div className={`modal ${isModalOpen ? 'open' : ''}`}>
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>
                                <img src={modalData.image} alt={modalData.name} className="modal-profile-pic" />
                                <h2>{modalData.name}</h2>
                                <div className="contact-links">
                                    {modalData.contact.github && (
                                        <a href={modalData.contact.github} target="_blank" rel="noopener noreferrer">
                                            <img src={modalData.contact.githubIcon} alt="GitHub" className="contact-icon" />
                                        </a>
                                    )}
                                    {modalData.contact.linkedin && (
                                        <a href={modalData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                            <img src={modalData.contact.linkedinIcon} alt="LinkedIn" className="contact-icon" />
                                        </a>
                                    )}
                                </div>
                                <p><strong>Role:</strong> {modalData.role}</p>
                                <p><strong>Email:</strong> {modalData.email}</p>
                                <p><strong>Bio:</strong> {modalData.bio}</p>
                                <p><strong>Contribution:</strong> {modalData.contribution}</p>
                                <p>
                                    <strong>Papers Worked Upon: </strong>
                                    {modalData.papersWorked.map((paper, index) => (
                                        <span key={index}>
                                            {paper } {index < modalData.papersWorked.length - 1 && <span>, </span>}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <a href="#conclusion-content" className="button style3 up anchored">Previous</a>
        </section>
    );
};

export default Contact;