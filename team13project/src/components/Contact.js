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
        bio: '-',
        papersWorked: [
            <a href="https://ieeexplore.ieee.org/document/5473881">Securing BGP — A Literature Survey</a>,
            <a href="https://i.blackhat.com/BH-US-23/Presentations/US-23-dosSantos-Route-to-Bugs-Analyzing-the-Security-of-BGP.pdf">BGP Vulnerability Presentations and Analysis</a>,
            <a href="https://arxiv.org/pdf/2105.02346">Estimating the Impact of BGP Prefix Hijacking</a>,
            <a href="https://labs.apnic.net/index.php/2021/08/03/a-survey-on-securing-inter-domain-routing-part-2-approaches-to-securing-bgp/">A Survey on Securing Inter-Domain Routing Part 2 – Approaches to Securing BGP</a>,
            <a href="https://ieeexplore.ieee.org/document/8722413/references#references">Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness </a>
        ],
        contact: {
            github: '-', 
            linkedin: '-', 
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
        bio: '-',
        papersWorked: [
            <a href="https://ieeexplore.ieee.org/document/5473881">Securing BGP — A Literature Survey</a>,
            <a href="https://i.blackhat.com/BH-US-23/Presentations/US-23-dosSantos-Route-to-Bugs-Analyzing-the-Security-of-BGP.pdf">BGP Vulnerability Presentations and Analysis</a>,
            <a href="https://arxiv.org/pdf/2105.02346">Estimating the Impact of BGP Prefix Hijacking</a>,
            <a href="https://labs.apnic.net/index.php/2021/08/03/a-survey-on-securing-inter-domain-routing-part-2-approaches-to-securing-bgp/">A Survey on Securing Inter-Domain Routing Part 2 – Approaches to Securing BGP</a>,
            <a href="https://ieeexplore.ieee.org/document/8722413/references#references">Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness </a>
        ],
        contact: {
            github: '-', 
            linkedin: '-', 
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
        bio: '-',
        papersWorked: [
            <a href="https://ieeexplore.ieee.org/document/5473881">Securing BGP — A Literature Survey</a>,
            <a href="https://i.blackhat.com/BH-US-23/Presentations/US-23-dosSantos-Route-to-Bugs-Analyzing-the-Security-of-BGP.pdf">BGP Vulnerability Presentations and Analysis</a>,
            <a href="https://arxiv.org/pdf/2105.02346">Estimating the Impact of BGP Prefix Hijacking</a>,
            <a href="https://labs.apnic.net/index.php/2021/08/03/a-survey-on-securing-inter-domain-routing-part-2-approaches-to-securing-bgp/">A Survey on Securing Inter-Domain Routing Part 2 – Approaches to Securing BGP</a>,
            <a href="https://ieeexplore.ieee.org/document/8722413/references#references">Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness </a>
        ],
        contact: {
            github: '-', 
            linkedin: '-', 
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
        bio: '-',
        papersWorked: [
            <a href="https://ieeexplore.ieee.org/document/5473881">Securing BGP — A Literature Survey</a>,
            <a href="https://i.blackhat.com/BH-US-23/Presentations/US-23-dosSantos-Route-to-Bugs-Analyzing-the-Security-of-BGP.pdf">BGP Vulnerability Presentations and Analysis</a>,
            <a href="https://arxiv.org/pdf/2105.02346">Estimating the Impact of BGP Prefix Hijacking</a>,
            <a href="https://labs.apnic.net/index.php/2021/08/03/a-survey-on-securing-inter-domain-routing-part-2-approaches-to-securing-bgp/">A Survey on Securing Inter-Domain Routing Part 2 – Approaches to Securing BGP</a>,
            <a href="https://ieeexplore.ieee.org/document/8722413/references#references">Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness </a>
        ],
        contact: {
            github: '-', 
            linkedin: '-', 
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
                        <div className="modal">
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