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
        bio: '-'},
    { 
        id: 2, 
        name: 'Chirag Gupta', 
        email: 'chirag.gupta@slu.edu', 
        image: chiragImg,
        role: 'Website Developer',
        bio: '-'
    },
    { 
        id: 3, 
        name: 'Sushma Veeravalli', 
        email: 'Sveeravalli@slu.edu', 
        image: sushmaImg,
        role: 'Content Validator',
        bio: '-'
    },
    { 
        id: 4, 
        name: 'Karthik Mangineni', 
        email: 'kmangineni@slu.edu', 
        image: karthikImg,
        role: 'Content Validator',
        bio: '-'
    },
    { 
        id: 5, 
        name: 'Pranitha Padala', 
        email: 'pranitha.padala@slu.edu', 
        image: pranithaImg,
        role: 'Reporting and Delivery Lead',
        bio: '-'
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
            <div className="content">
                <header>
                    <h2>Team</h2>
                    <p>Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
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
                                <p><strong>Role:</strong> {modalData.role}</p>
                                <p><strong>Email:</strong> {modalData.email}</p>
                                <p><strong>Bio:</strong> {modalData.bio}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <a href="#one" className="button style3 up anchored">Previous</a>
        </section>
    );
};

export default Contact;