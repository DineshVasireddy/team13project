import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LinearScale,
    CategoryScale,
    PointElement,
    LineElement,
    LineController,
    Tooltip,
    Legend
);

const Taxonomy = () => {
    const papers = [
        {
            title: "BGP with BGPsec: Attacks and Countermeasures",
            problemDomain: "BGP vulnerabilities and traffic hijacking",
            solution: "Implement BGPsec with enhancements",
            approach: "Proactive defense mechanisms and validation techniques",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Real data trace analysis and case studies",
            applicationDomain: "Internet infrastructure",
            securityMechanism: "Cryptographic validation and routing attestation"
        },
        {
            title: "Securing BGP — A Literature Survey",
            problemDomain: "BGP security vulnerabilities and attacks",
            solution: "Enhanced security measures for BGP",
            approach: "Comprehensive literature review and analysis",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Survey of existing literature and proposals",
            applicationDomain: "Internet routing infrastructure",
            securityMechanism: "Various security proposals and mechanisms evaluated"
        },
        {
            title: "BGP Vulnerability Presentations and Analysis",
            problemDomain: "BGP message parsing vulnerabilities and DoS attacks",
            solution: "Improve BGP implementation security and patch vulnerabilities",
            approach: "Vulnerability analysis and risk assessment",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "CVE analysis and testing against BGP implementations",
            applicationDomain: "Internet routing infrastructure",
            securityMechanism: "Fuzz testing and security guidelines (e.g., MANRS, RFC7454)"
        },
        {
            title: "Estimating the Impact of BGP Prefix Hijacking",
            problemDomain: "BGP prefix hijacking and its impact estimation",
            solution: "Accurate methodologies for estimating hijack impact",
            approach: "Analytical study and measurement-based techniques",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Real-world hijacking experiments and network measurements",
            applicationDomain: "Internet security and network operations",
            securityMechanism: "Measurement techniques (ping and public infrastructure data"
        },
        {
            title: "Analysis of Border Gateway Protocol (BGP) with Improvement in Byzantine Robustness",
            problemDomain: "BGP vulnerabilities and Byzantine failures",
            solution: "Method for detecting and analyzing misbehavior",
            approach: "Simulation-based before-and-after attack methodology",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Simulation results analysis",
            applicationDomain: "Internet routing security",
            securityMechanism: "Detection algorithm for misbehavior"
        },
        {
            title: "BGP, DNS, and the Fragility of our Critical Systems",
            problemDomain: "DNS and BGP vulnerabilities",
            solution: "Implement DNSSEC, RPKI",
            approach: "Proactive defense, encryption",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Case studies",
            applicationDomain: "Internet infrastructure",
            securityMechanism: "Cryptographic validation"
        },
        {
            title: "BGP security vulnerabilities",
            problemDomain: "Security extensions to BGP and detection/recovery systems",
            solution: "Survey and evaluation of the existing proposals",
            approach: "Interdomain routing protocols",
            webArchitectureType: "Interdomain routing protocols",
            evaluationMethodology: "Literature review, methodology for Pervasiveness assessment of security solutions",
            applicationDomain: "Internet routing",
            securityMechanism: "Detection and mitigation strategies for routing instabilities"
        },
        {
            title: "Protecting BGP Routes to Top-Level DNS Servers",
            problemDomain: "DNS and BGP vulnerabilities",
            solution: "DNSSEC, RPKI",
            approach: "Proactive defense, encryption",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Case studies",
            applicationDomain: "Internet infrastructure",
            securityMechanism: "Cryptographic validation"
        },
        {
            title: "Improvement of PKI, BGP, and DNS Using Blockchain: A Systematic Review",
            problemDomain: "DNS and BGP vulnerabilities",
            solution: "DNSSEC, RPKI",
            approach: "Proactive defense, encryption",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Case studies",
            applicationDomain: "The internet infrastructure",
            securityMechanism: "Cryptographic validation"
        },
        {
            title: "A Survey of BGP Security Issues and Solutions",
            problemDomain: "BGP vulnerabilities (hijacking, misrouting)",
            solution: "DNSSEC, RPKI, BGPsec",
            approach: "Cryptographic validation, route filtering",
            webArchitectureType: "Distributed Autonomous Systems (AS)",
            evaluationMethodology: "Case studies, real-world incidents",
            applicationDomain: "Internet routing infrastructure",
            securityMechanism: "Cryptographic validation (e.g., DNSSEC, RPKI, S-BGP)"
        },
        {
            title: "The role of DNS security in mitigating cyber threats: An analysis of recent attacks and recommended strategies",
            problemDomain: "DNS and BGP vulnerabilities are exploited in attacks like DNS spoofing and BGP hijacking",
            solution: "DNSSEC and RPKI are used to ensure cryptographic validation and secure routing",
            approach: "Proactive defense mechanisms, including encryption and digital signatures",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Case studies of recent cyberattackss",
            applicationDomain: "Internet infrastructure",
            securityMechanism: "The security mechanisms are DNSSEC, RPKI, encryption, digital signatures, and proactive defense strategies"
        },
        {
            title: "Protecting BGP Routes to Top-Level DNS Servers",
            problemDomain: "Insecure routing to DNS servers",
            solution: "Route validation using RPKI, BGPsec",
            approach: "Secure routing policies",
            webArchitectureType: "Distributed DNS and BGP networks",
            evaluationMethodology: "Simulation, empirical analysis",
            applicationDomain: "DNS and BGP security",
            securityMechanism: "Route validation, RPKI"
        },
        {
            title: "Securing BGP Against Spoofing Attacks",
            problemDomain: "BGP spoofing and prefix hijacking",
            solution: "Cryptographic authentication of routing announcements",
            approach: "BGPsec, route validation",
            webArchitectureType: "Distributed networks",
            evaluationMethodology: "Real-world case studies, simulations",
            applicationDomain: "Autonomous Systems, Internet routing",
            securityMechanism: "Cryptographic validation, BGPsec"
        },
        {
            title: "BGP with BGPsec: Attacks and Countermeasures",
            problemDomain: "BGP route hijacking and interception",
            solution: "BGPsec, cryptographic route validation",
            approach: "Cryptographic validation, public key infrastructure (PKI)",
            webArchitectureType: "Distributed routing systems",
            evaluationMethodology: "Simulation, analysis of cryptographic protocols",
            applicationDomain: "Global Internet routing",
            securityMechanism: "BGPsec, cryptographic signatures"
        },
        {
            title: "The Impact of DNS Insecurity on Time",
            problemDomain: "DNS vulnerabilities impacting time synchronization",
            solution: "DNSSEC for securing DNS lookups",
            approach: "Securing DNS queries through cryptographic means",
            webArchitectureType: "Hierarchical DNS networks",
            evaluationMethodology: "Case studies, simulations",
            applicationDomain: "Time synchronization services, DNS infrastructure",
            securityMechanism: "DNSSEC, cryptographic validation"
        },
        {
            title: "Improving Internet Infrastructure: BGP Predictability and Cloud DNS Performance",
            problemDomain: "Internet Infrastructure Performance",
            solution: "Predictability Models for BGP, DNS Performance Optimization",
            approach: "Data Mining Models, Cloud DNS Study, BGP Molecules",
            webArchitectureType: "Distributed Architecture, Cloud DNS Services",
            evaluationMethodology: "Performance Measurements, Failure Prediction",
            applicationDomain: "Internet Routing, Cloud Services",
            securityMechanism: "Route Failure Prediction, DNS Performance Optimization"
        },
        {
            title: "DNSSEC and Its Potential for DDoS Attacks",
            problemDomain: "DNS Security Vulnerabilities",
            solution: "DNSSEC for Cache Poisoning Protection, Mitigation Strategies for DDoS",
            approach: "DNSSEC Measurement, Amplification Attack Analysis",
            webArchitectureType: "Hierarchical DNS with Security Extensions",
            evaluationMethodology: "Large-Scale DNSSEC Measurements",
            applicationDomain: "DNS Security, Internet Infrastructure",
            securityMechanism: "Digital Signatures, Amplification Attack Mitigation"
        },
        {
            title: "Blockchain-Based DNS to Mitigate DDoS Attacks",
            problemDomain: "DDoS Mitigation in DNS",
            solution: "Blockchain-Based DNS",
            approach: "Decentralized DNS Architecture",
            webArchitectureType: "Distributed DNS with Blockchain",
            evaluationMethodology: "Cost-Benefit Analysis, Architecture Testing",
            applicationDomain: "Internet Security, Blockchain",
            securityMechanism: "Decentralized DNS, Single Point Failure Elimination"
        },
        {
            title: "A Blockchain-Based Architecture for Collaborative DDoS Mitigation with Smart Contracts",
            problemDomain: "DDoS Protection Collaboration",
            solution: "Blockchain and SDN for DDoS Mitigation",
            approach: "Collaborative Traffic Classification, Smart Contracts",
            webArchitectureType: "SDN-Enabled Distributed Architecture",
            evaluationMethodology: "Performance Testing, Security Analysis",
            applicationDomain: "Network Security, Distributed Systems",
            securityMechanism: "Smart Contracts, Traffic Redirection"
        },
        {
            title: "MTDNS: Moving Target Defense for Resilient DNS Infrastructure",
            problemDomain: "DNS DDoS Protection",
            solution: "Moving Target Defense with SDN and NFVs",
            approach: "Dynamic DNS Traffic Redirection",
            webArchitectureType: "Virtualized DNS Servers with SDN",
            evaluationMethodology: "Testbed Experimentation, DNS Query Success Rate",
            applicationDomain: "DNS Infrastructure, Network Security",
            securityMechanism: "Dynamic DNS Redirection, MTD-based Defense"
        },
        {
            title: "A Survey on DNS Encryption: Current Development, Malware Misuse, and Inference Techniques",
            problemDomain: "Ensuring Privacy in DNS Communications, Detecting and Mitigating Malware",
            solution: "Ensuring Privacy in DNS Communications, Detecting and Mitigating Malware",
            approach: "Encryption at Transport Layer, Traffic Pattern Analysis, Machine Learning Techniques",
            webArchitectureType: "Client-Server Architecture, Distributed DNS Architecture",
            evaluationMethodology: "Empirical Performance Measurements, Simulation Studies, Machine Learning Model Testing",
            applicationDomain: "Internet Privacy and Security, Enterprise Network Security, Network Performance Optimization",
            securityMechanism: "Transport Layer Encryption, Malware Detection via Machine Learning, Fallback Attack Mitigation"
        },
        {
            title: "A Survey on DNS Security Issues and Mitigation Techniques",
            problemDomain: "DNS Security and Privacy",
            solution: "Blockchain-Backed DNSSEC, CGuard, Oblivious DNS (ODNS)",
            approach: "Blockchain-Based Validation, Privacy Preservation with ODNS, Detection Mechanisms",
            webArchitectureType: "Distributed Hierarchical Architecture, Blockchain Integration",
            evaluationMethodology: "Simulation Studies, Threshold-based Detection, Large-scale Data Analysis",
            applicationDomain: "Cybersecurity, Internet Privacy",
            securityMechanism: "Blockchain-based Validation, Intrusion Detection System (IDS), Encrypted DNSSEC (E-DNSSEC)"
        },
        {
            title: "Survey on Domain Name System Security",
            problemDomain: "SDN-Based Architecture, with the added feature of Non-SDN Compatibility",
            solution: "DNSSEC (Domain Name System Security Extensions), DNSCurve, P2P DNS Solutions (DDNS, CoDoNS)",
            approach: "Digital Signatures and Encryption, Collaborative and Redundant Architectures",
            webArchitectureType: "Hierarchical Architecture, P2P-based Architecture",
            evaluationMethodology: "Security Protocol Analysis, Performance Testing, Comparison of Solutions",
            applicationDomain: "Network Security, Cloud and IoT Environments",
            securityMechanism: "Digital Signatures (DNSSEC), Encryption (DNSCurve), Collaborative Query Systems (CoDNS, P2P)"
        },
        {
            title: "An Inter-Domain Attack Mitigating Solution",
            problemDomain: "Inter-Domain Cybersecurity Threats:, Lack of Efficient Coordination",
            solution: "Attack Blocking System (ABS), SDN Integration",
            approach: "Inter-ABS Communication, Attack Verification Module, Centralized and Distributed Designs. Web Architecture Type: SDN-Based Architecture, Non-SDN Compatibility",
            webArchitectureType: "SDN-Based Architecture, with the added feature of Non-SDN Compatibility",
            evaluationMethodology: "Simulations and Emulations, Performance Comparison with Flowspec Application Domain: Network Security, Enterprise Networks and ISPs",
            applicationDomain: "Network Security, specifically targeting Enterprise Networks and ISPs",
            securityMechanism: "Attack Detection and Notification, Trust Levels for Peers, Automated Blocking Rules"
        },
        {
            title: "Security of the Domain Name System (DNS)",
            problemDomain: "DNS Security and Policy Guidance, Policy-Making Guidance",
            solution: "DNSSEC Implementation, Encrypted Transport Protocols, Registry Lock Mechanism",
            approach: "Multi-Stakeholder Collaboration, Incident Response Frameworks, Policy and Incentives",
            webArchitectureType: "Hierarchical Architecture, Decentralized Policy Coordination",
            evaluationMethodology: "Case Studies of Past Incidents, DNSSEC Deployment Metrics, Policy Impact Assessments",
            applicationDomain: "National Security and Governance, ISP and Registrar Operations, Digital Economy and IoT",
            securityMechanism: "DNSSEC for Data Integrity, Encrypted DNS Protocols (DoH, DoT), Registry Lock and Access Controls"
        }
    ];

    const dnsSecurityData = [
        {
            category: "Root",
            metrics: { DNSSEC: 100.00, DNSCookie: 100.00, CAA: 0.00, MX: 0.00, SPF: 0.00, DMARC: 0.00, MTA_STS: 0.00, DANE: 0.00, TLSRPT: 0.00 },
        },
        {
            category: "ccTLD",
            metrics: { DNSSEC: 56.69, DNSCookie: 81.10, CAA: 0.00, MX: 6.30, SPF: 0.00, DMARC: 0.00, MTA_STS: 0.00, DANE: 0.00, TLSRPT: 0.00 },
        },
        {
            category: "gTLD",
            metrics: { DNSSEC: 100.00, DNSCookie: 45.45, CAA: 0.00, MX: 0.00, SPF: 0.00, DMARC: 0.00, MTA_STS: 0.00, DANE: 0.00, TLSRPT: 0.00 },
        },
        {
            category: "Top 10",
            metrics: { DNSSEC: 0.00, DNSCookie: 20.00, CAA: 30.00, MX: 30.00, SPF: 100.00, DMARC: 88.89, MTA_STS: 33.33, DANE: 0.00, TLSRPT: 33.33 },
        },
        {
            category: "Top 100",
            metrics: { DNSSEC: 4.00, DNSCookie: 21.00, CAA: 48.00, MX: 48.00, SPF: 96.51, DMARC: 84.88, MTA_STS: 5.81, DANE: 0.00, TLSRPT: 5.81 },
        },
        {
            category: "Top 1K",
            metrics: { DNSSEC: 9.20, DNSCookie: 13.80, CAA: 22.70, MX: 22.70, SPF: 92.85, DMARC: 74.01, MTA_STS: 1.48, DANE: 0.57, TLSRPT: 1.82 },
        },
        {
            category: "Top 5K",
            metrics: { DNSSEC: 8.60, DNSCookie: 18.58, CAA: 14.90, MX: 14.90, SPF: 89.86, DMARC: 58.49, MTA_STS: 0.75, DANE: 0.84, TLSRPT: 0.98 },
        },
        {
            category: "Top 10K",
            metrics: { DNSSEC: 7.67, DNSCookie: 17.40, CAA: 12.98, MX: 12.98, SPF: 88.66, DMARC: 54.09, MTA_STS: 0.51, DANE: 0.84, TLSRPT: 0.74 },
        },
    ];
    const dnsProvidersData = {
        labels: ['Google', 'Open DNS', 'NeuStar', 'Quad9', 'CloudFlare'],
        datasets: [
            {
                label: 'DNS Providers Usage (%)',
                data: [13.21, 1.82, 0.15, 0.13, 0.12],
                borderColor: 'rgba(255,159,64,1)',
                backgroundColor: 'rgba(255,159,64,0.2)',
                fill: true,
                tension: 0.5,
            },
        ],
    };

    const data = {
        labels: dnsSecurityData.map(item => item.category),
        datasets: [
            {
                label: 'DNSSEC Adoption',
                data: dnsSecurityData.map(item => item.metrics.DNSSEC),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
                tension: 0.5,
            },
            {
                label: 'DNS Cookie Adoption',
                data: dnsSecurityData.map(item => item.metrics.DNSCookie),
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                fill: true,
                tension: 0.5, 
            },
            {
                label: 'SPF Adoption',
                data: dnsSecurityData.map(item => item.metrics.SPF),
                borderColor: 'rgba(54,162,235,1)',
                backgroundColor: 'rgba(54,162,235,0.2)',
                fill: true,
                tension: 0.5, 
            },
            {
                label: 'DMARC Adoption',
                data: dnsSecurityData.map(item => item.metrics.DMARC),
                borderColor: 'rgba(255,205,86,1)',
                backgroundColor: 'rgba(255,205,86,0.2)',
                fill: true,
                tension: 0.5, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            y: {
                max: 100, 
                min: 0,
                ticks: {
                    stepSize: 20, 
                },
            },
        },
    };

    const optionsDNS = {
        responsive: true,
        maintainAspectRatio: false, 
        scales: {
            y: {
                max: 20, 
                min: 0,
                ticks: {
                    stepSize: 5, 
                },
            },
        },
    };

    return (
        <section id="work" className="main style3 primary dark">
            <div className="overlay">
            </div>
                <div className="content" id='work-content'>
                    <header>
                        <h2>Taxonomy</h2>
                        <h3>Security Mechanisms</h3>
                        <h4>Cryptographic Validation</h4>
                        <ul>
                            <li><strong>DNSSEC:</strong> Secures DNS queries with cryptographic signatures.</li>
                            <li><strong>RPKI:</strong> Validates BGP routes through certificate-based systems.</li>
                            <li><strong>BGPsec:</strong> Employs cryptographic signatures for route validation.</li>
                        </ul>
                        <h4>Proactive Defense</h4>
                        <ul>
                            <li><strong>Route Filtering:</strong> Ensures only valid routes are accepted.</li>
                            <li><strong>Secure Routing Policies:</strong> Implementing policies that prioritize secure routing methods.</li>
                        </ul>
                        <h4>Innovative Approaches</h4>
                        <ul>
                            <li><strong>Blockchain:</strong> Use of decentralized technology for DNS and BGP security.</li>
                        </ul>

                        <h3>All Papers Overview</h3>
                        <div id='needbigscreen' style={{visibility: 'hidden'}}><h1 style={{color :'red'}}>Need Big Screen Device to view content of the table clearly!</h1></div>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f2f2f2' }}>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Title</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Problem Domain</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Solution</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Approach</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Web Architecture Type</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Evaluation Methodology</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Application Domain</th>
                                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Security Mechanism</th>
                                </tr>
                            </thead>
                            <tbody>
                                {papers.map((paper, index) => (
                                    <tr key={index}>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.title}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.problemDomain}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.solution}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.approach}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.webArchitectureType}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.evaluationMethodology}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.applicationDomain}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd' }}>{paper.securityMechanism}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </header>
                    

                    
                        <div style={{ flex: '1', marginRight: '20px', height: '800px', marginBottom: '20px' }}>
                            <h3><a href='https://blog.apnic.net/2021/11/26/adoption-of-dns-security-mechanisms-related-to-ease-of-use-cost/' style={{textDecoration: 'underline', color: 'blue'}}>DDNS Security Adoption 2021 (%)</a></h3>
                            <Line data={data} options={options} />
                        </div>
                        <div style={{ flex: '1', marginRight: '20px', height: '400px', marginBottom: '30px', marginTop: '50px' }}>
                            <h3><a href='https://medium.com/@nykolas.z/dns-market-share-analysis-identifying-the-most-popular-dns-providers-80fefb2cfd05' style={{textDecoration: 'underline', color: 'blue'}}>Top Most DNS Providers Usage (%)</a></h3>
                            <Line data={dnsProvidersData} options={optionsDNS} />
                        </div>
                </div>

                <footer>
                    <a href="#one-content" className="button style2 down anchored">Next</a>
                    <a href="#two-content" className="button style3 up anchored">Previous</a>
                </footer>
        </section>
    );
};

export default Taxonomy;

