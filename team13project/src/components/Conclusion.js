import React from 'react'

const Conclusion = () => {
    

    

    

    return (
        <section id="conclusion" className="main style3 secondary">
            {/* <div className="overlay"></div>  */}
            <div className="content" id='conclusion-content'>
                <header>
                    <h2>Conclusion</h2>
                </header>
                <div className='conclusion-description'><p>In conclusion, the security of DNS and BGP is critical for maintaining the integrity and reliability of the Internet. 
                    As both protocols are foundational to Internet functionality, their vulnerabilities present significant risks, including data theft, traffic hijacking, and service disruptions.
                    The growing dependence on online services heightens the urgency for effective security measures.

                    Current solutions like DNSSEC, RPKI, and BGPsec offer promising approaches to enhance security through cryptographic validation and proactive defense mechanisms.
                    However, challenges such as limited adoption and implementation issues hinder their effectiveness. 
                    The exploration of innovative technologies, including blockchain, may provide additional avenues for securing these protocols, but scalability and resource concerns remain obstacles.
                    Addressing the gaps in research and fostering broader collaboration among stakeholders is essential to strengthen the security of DNS and BGP. Continued innovation and vigilance are required 
                    to protect against evolving threats in the digital landscape, ensuring a safer and more resilient Internet for all users.</p></div>
            </div>
            <a href="#one-content" className="button style3 up anchored">Previous</a>
            <a href="#contact-content" className="button style2 down anchored">Next</a>
        </section>
    );
};

export default Conclusion;