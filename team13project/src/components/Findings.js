import React from 'react';

const Findings = () => {
    return (
        <section id="two" className="main style3 left dark fullscreen">
            <div className="overlay"></div>
            <div className="content box style2" id='two-content'>
                <header>
                    <h2>Findings</h2>
                </header>
                
                <h3>BGP Vulnerabilities</h3>
                <ul style={{listStyle: 'circle'}}>
                    <li><strong>Route Hijacking:</strong> Unauthorized modification of routing information, allowing attackers to divert traffic to malicious destinations.</li>
                    <li><strong>Misrouting:</strong> Incorrect routing information that can lead to traffic being sent to unintended paths.</li>
                    <li><strong>Spoofing Attacks:</strong> Attackers impersonate legitimate routers to manipulate routing announcements, causing traffic redirection.</li>
                </ul>

                <h3>DNS Vulnerabilities</h3>
                <ul style={{listStyle: 'circle'}}>
                    <li><strong>Cache Poisoning:</strong> Attackers insert false DNS records into a resolver’s cache, redirecting users to malicious sites.</li>
                    <li><strong>Insecure Routing to DNS Servers:</strong> Compromised paths can lead to man-in-the-middle attacks affecting DNS resolution.</li>
                </ul>

                <h3>Proposed Solutions</h3>
                <h4>DNSSEC</h4>
                <p>
                    <strong>Functionality:</strong> Provides cryptographic signatures for DNS data, ensuring the integrity and authenticity of responses. 
                    <strong>Limitations:</strong> Partial deployment leaves many DNS servers vulnerable.
                </p>
                <h4>RPKI</h4>
                <p>
                    <strong>Functionality:</strong> Validates the authenticity of BGP routing announcements, ensuring only legitimate routes are accepted. 
                    <strong>Current Challenges:</strong> Requires widespread adoption and coordination among ASes.
                </p>
                <h4>BGPsec</h4>
                <p>
                    <strong>Functionality:</strong> Validates BGP routes using cryptographic signatures to reduce the risk of hijacking and spoofing. 
                    <strong>Challenges:</strong> Only effective with comprehensive implementation across networks.
                </p>
                <h4>Blockchain Technologies</h4>
                <p>
                    <strong>Potential Uses:</strong> Provides a decentralized, tamper-proof method for managing DNS records and validating routing information. 
                    <strong>Challenges:</strong> Issues like scalability and resource consumption need addressing.
                </p>

                <h3>Gaps and Challenges</h3>
                <ul style={{listStyle: 'circle'}}>
                    <li><strong>Implementation Issues:</strong> Many proposed solutions are not widely adopted, leading to persistent vulnerabilities in the infrastructure.</li>
                    <li><strong>Research Gaps:</strong> Ongoing need for innovation and improved methodologies to strengthen security in both DNS and BGP.</li>
                </ul>
            </div>
            <a href="#work-content" className="button style2 down anchored">Next</a>
            <a href="#intro-content" className="button style3 up anchored">Previous</a>
        </section>
    );
};

export default Findings;