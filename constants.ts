import React from 'react';
import { Section, SectionName } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, UserIcon, PhoneIcon, ShieldIcon } from './components/Icons';

// --- GITHUB OAUTH SIMULATION HANDLER ---
// NOTE: A complete, secure OAuth flow requires a server-side component (e.g., Netlify/Vercel function)
// to securely exchange the code for an access token. This client-side function initiates the process only.
const handleGitHubLogin = () => {
    // 🛑 CRITICAL: REPLACE THIS PLACEHOLDER WITH YOUR ACTUAL GITHUB OAUTH CLIENT ID
    const GITHUB_CLIENT_ID = 'YOUR_GITHUB_OAUTH_CLIENT_ID'; 
    // FIXED: Appended '/callback' to match your GitHub app settings.
    const REDIRECT_URI = window.location.origin + "/owner-scotthwcouk.github.io-master/callback"; 
    const SCOPE = 'read:user'; // Minimal scope to read public profile

    if (GITHUB_CLIENT_ID.includes('YOUR')) {
        alert("ACCESS DENIED: GitHub OAuth Client ID is not configured. Please replace 'YOUR_GITHUB_OAUTH_CLIENT_ID' in constants.ts.");
        return;
    }
    
    // Step 1: Redirect user to GitHub for authorization
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    window.location.href = authUrl;

    alert("Initiating GitHub Authorization Sequence. You will be redirected to the Federation GitHub Console.");
};
    
    // Step 1: Redirect user to GitHub for authorization
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
    window.location.href = authUrl;

    alert("Initiating GitHub Authorization Sequence. You will be redirected to the Federation GitHub Console.");
};
// ----------------------------------

// FIX: The following components are defined using React.createElement to avoid JSX.
// This is necessary because this file has a .ts extension, which typically doesn't
// process JSX syntax. The standard practice would be to rename this file to .tsx.
// Given the constraint to not change file names, this is the correct approach.
const AboutContent = () => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(UserIcon, { className: "w-6 h-6 mr-2" }),
            "CAPTAIN'S LOG: SCOTT HARVEY-WHITTLE"
        ),
        React.createElement('img', { 
            src: "/Media/1722689909-bpfull.webp",
            alt: "Scott Harvey-Whittle", 
            className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        }),
        React.createElement('p', { className: "mb-4" }, "My designation is Scott Harvey-Whittle, currently assigned to The Open University. My primary directive is the completion of a BSc (Honours) in Computing and IT."),
        React.createElement('p', { className: "mb-4" }, "Inspired by the voyages of the U.S.S. Voyager, my personal mission is one of perpetual learning and exploration. I am committed to navigating the vast expanse of technology and bringing innovative projects from the conceptual stage into the public domain."),
        React.createElement('p', null, "The final frontier is knowledge, and my journey is to continuously push its boundaries.")
    )
);

const ProjectsContent = () => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(CodeIcon, { className: "w-6 h-6 mr-2" }),
            "MISSION LOGS: PROJECT ARCHIVES"
        ),
        React.createElement('div', { className: "space-y-6" },
            // Block 1: This Portfolio
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                    React.createElement('a', {
                        href: "https://github.com/owner-scotthwcouk/owner-scotthwcouk.github.io",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: 'inherit', textDecoration: 'none' }
                    }, "Starship Portfolio Interface")
                ),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2025.Q3"),
                React.createElement('p', { className: "mt-2" }, "After extensive deep-space reconnaissance, Command issued a priority directive: establish a new communications hub. This project, designated 'The Portfolio Interface', required navigating uncharted sectors of React and TypeScript. The mission faced numerous temporal anomalies and subspace distortions, demanding countless system diagnostics and recalibrations. After a long and arduous voyage through the debugging nebula, the interface is now fully operational, providing a stable channel for all incoming transmissions.")
            ),
            // Block 2: Code Institute
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                    React.createElement('a', {
                        href: "https://github.com/Scott-oustudent/code-institute-5-day-coding-challenge-",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: 'inherit', textDecoration: 'none' }
                    }, "Code Institute 5 Day Challenge")
                ),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2025.Q2"),
                React.createElement('p', { className: "mt-2" }, "I embarked on Mission Directive: A 5-day rapid deployment exercise to construct a functional web interface."),
                React.createElement('h4', { className: "text-l text-voyager-tan font-bold" }, "Execution Summery:"),
                React.createElement('h5', { className: "text-l text-voyager-tan font-bold" }, "HTML Protocols (Structural Schematics):"),
                React.createElement('p', { className: "mt-2" }, "Headings (<h1>-<h5>): Established communication priority."),
                React.createElement('p', { className: "mt-2" }, "Paragraphs (<p>): Transmitted data logs."),
                React.createElement('p', { className: "mt-2" }, "Images (<img>): Integrated visual reconnaissance data."),
                React.createElement('p', { className: "mt-2" }, "Semantic Tags (<header>, <body>, <footer>): Assembled the main fuselage, command bridge, and engineering sections."),
                React.createElement('p', { className: "mt-2" }, "Links (<link>): Established secure comms links to internal and external data streams."),
                React.createElement('h5', { className: "text-l text-voyager-tan font-bold" }, "CSS Protocols (Aesthetic Calibration):"),
                React.createElement('p', { className: "mt-2" }, "Tag Selectors: Calibrated all standard-issue components for a uniform appearance."),
                React.createElement('p', { className: "mt-2" }, "ID Selectors: Targeted unique, mission-critical components for specific styling. Each ID must be a unique identifier."),
                React.createElement('p', { className: "mt-2" }, "Class Selectors: Applied standard visual protocols to multiple components, allowing for efficient and reusable styling across the fleet of elements.")
            ),
            // Block 3: Cheat Sheets
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                    React.createElement('a', {
                        href: "https://github.com/Scott-oustudent/Cheat-Sheets",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: 'inherit', textDecoration: 'none' }
                    }, "Cheat Sheets")
                ),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2025.Q1"),
                React.createElement('p', { className: "mt-2" }, "Recognizing a tactical need for immediate access to critical information, I commissioned the establishment of the Cheatsheet Databank.This centralized repository was engineered to serve as a rapid-access archive for all crew members. It contains vital operational schematics and command syntax guides for a wide array of programming dialects and communication protocols, including Markdown. The primary objective is to ensure any operator can swiftly reference complex command structures, streamlining mission execution and enhancing operational efficiency across the fleet.")
            ),
            // Block 4: MathTool
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                    React.createElement('a', {
                        href: "https://github.com/Scott-oustudent/MathTool",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: 'inherit', textDecoration: 'none' }
                    }, "MathTool")
                ),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2025.Q1"),
                React.createElement('p', { className: "mt-2" }, "During my initial training cycle, while mastering the starship's core Python programming language, I was tasked with a priority mission. The objective was to engineer and deploy a tactical mathematics simulator designed to sharpen a cadet's computational reflexes.The simulation would engage the user by transmitting a series of rapid-response calculations based on four core operational parameters: multiplication, division, addition, and subtraction. Upon completion of the training sequence, the program would analyze the mission data and display a final performance score, logging the cadet's accuracy and efficiency for their official flight record.")
            )
        )
    )
);

const ContactContent = () => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(PhoneIcon, { className: "w-6 h-6 mr-2" }),
            "COMMUNICATIONS CHANNEL: OPEN"
        ),
        React.createElement('p', { className: "mb-6" }, "To establish a secure comms link for inquiries, collaborations, or distress signals, please use the following encrypted channels. Standard galactic protocols apply."),
        React.createElement('div', { className: "space-y-4" },
            React.createElement('a', { href: "mailto:scott@scott-hw.online", className: "flex items-center group" },
                React.createElement(MailIcon, { className: "w-6 h-6 mr-3 text-voyager-blue group-hover:text-voyager-orange transition-colors" }),
                React.createElement('span', { className: "text-voyager-tan group-hover:underline" }, "scott@scott-hw.online")
            ),
            React.createElement('a', { href: "https://github.com/scott-oustudent", target: "_blank", rel: "noopener noreferrer", className: "flex items-center group" },
                React.createElement(GithubIcon, { className: "w-6 h-6 mr-3 text-voyager-blue group-hover:text-voyager-orange transition-colors" }),
                React.createElement('span', { className: "text-voyager-tan group-hover:underline" }, "github.com/scott-oustudent")
            ),
            React.createElement('a', { href: "https://linkedin.com/in/sphw", target: "_blank", rel: "noopener noreferrer", className: "flex items-center group" },
                React.createElement(LinkedinIcon, { className: "w-6 h-6 mr-3 text-voyager-blue group-hover:text-voyager-orange transition-colors" }),
                React.createElement('span', { className: "text-voyager-tan group-hover:underline" }, "linkedin.com/in/sphw")
            )
        )
    )
);

const MissionUpdateContent = () => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(CodeIcon, { className: "w-6 h-6 mr-2" }),
            "MISSION ASSIGNMENT: THE OPEN UNIVERSITY (STARFLEET ACADEMY)"
        ),
        React.createElement('div', { className: "space-y-4" },
            React.createElement('p', null, React.createElement('strong', { className: "text-voyager-blue" }, "Stardate 2023.10: "), "Intelligence from the 'IT Job Market' sector revealed a recurring prerequisite for deep-space assignments: a formal certification in Computing and IT. Acknowledging this directive, I have been commissioned to a long-term mission with the Open University (OU) Starfleet Academy. My primary objective is to secure a BSc (Honours) in Computing and IT, officially commencing Stardate 2024.02."),
            React.createElement('p', null, React.createElement('strong', { className: "text-voyager-blue" }, "Stardate 2024.02: "), "Initial training module MU123 (Discovering Mathematics) proved a formidable challenge, requiring navigation through a dense nebula of foreign formulas and complex equations."),
            React.createElement('p', null, React.createElement('strong', { className: "text-voyager-blue" }, "Stardate 2024.04: "), "Received new directive: TM111 (Introduction to Technology, Part 1), providing foundational schematics. Intel confirms a Part 2 is forthcoming, promising advanced protocols including the Python programming dialect."),
            React.createElement('p', null, React.createElement('strong', { className: "text-voyager-blue" }, "Stardate 2024.08 - 2025.03: "), "The TM112 project phase was initiated and successfully concluded, marking a significant milestone in operational readiness."),
            React.createElement('p', null, React.createElement('strong', { className: "text-voyager-blue" }, "Stardate 2025.08: "), "Confirmed successful integration of modules TM112, TM129, and TM252. Cleared for Level 2 study, a significant leap in operational standards."),
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mt-4" }, "Current Directives: Stardate 2025.09"),
                React.createElement('p', { className: "mt-2" }, "With Level 2 operations underway, Command has issued two new, high-priority training directives to enhance capabilities in specialized, deep-space technologies:"),
                React.createElement('ul', { className: "list-disc list-inside mt-2 pl-4 space-y-1" },
                    React.createElement('li', null, React.createElement('strong', null, "Directive M250 (Object-Oriented Java Programming):"), " Mastering the complex architecture of the Java language."),
                    React.createElement('li', null, React.createElement('strong', null, "Directive TM257 (Cisco Networking, Part 1):"), " Commencing Phase 1 of the Cisco Inter-Systems Communications Network certification.")
                ),
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mt-6" }, "Charting the Final Frontier: Stardate 2026"),
                React.createElement('p', { className: "mt-2" }, "Starfleet has transmitted the flight plan for the final stages of my mission. The next phase involves advanced strategic training before I am cleared for Level 3 clearance—a significant leap in command-level operations."),
                React.createElement('ul', { className: "list-disc list-inside mt-2 pl-4 space-y-1" },
                    React.createElement('li', null, React.createElement('strong', null, "Upcoming Directive TM254 (Managing IT):"), " A critical command module on high-level IT strategy."),
                    React.createElement('li', null, React.createElement('strong', null, "Level 3 Protocols:"), " Advanced specializations in Software Engineering (TM354), Cisco Networking Part 2 (TM357), and Interaction Design (TM356).")
                ),
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mt-6" }, "The Capstone Mission: TM470"),
                React.createElement('p', { className: "mt-2" }, "My final assignment will be the capstone of my training: The Computing and IT Project (TM470). This extensive, tutor-guided mission will require me to consolidate all acquired knowledge and skills into a single, massive undertaking."),
                React.createElement('p', { className: "mt-2" }, "Successful completion of TM470 will signify the fulfillment of my primary directive. After a lifetime of anticipation, I will be eligible for graduation. The end of this long voyage is in sight.")
            )
        )
    )
);

// NEW COMPONENT FOR POLICIES
const PoliciesContent = () => (
    React.createElement('div', { className: "space-y-8" },
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(ShieldIcon, { className: "w-6 h-6 mr-2" }),
            "STARFLEET PROTOCOLS: REGULATIONS & GENERAL ORDERS"
        ),
        
        // --- 1. DATA PROTECTION DIRECTIVE (PRIVACY POLICY) ---
        React.createElement('div', { className: "border-l-2 border-voyager-blue pl-4" },
            React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mb-2" }, "DATA PROTECTION DIRECTIVE: PRIVACY PROTOCOLS"),
            React.createElement('p', { className: "mb-4 text-voyager-blue/80" }, "Source: UK General Data Protection Regulation (UK GDPR)"),
            
            // --- INSERTED PRIVACY POLICY CONTENT ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan space-y-3" },
                // Metadata
                React.createElement('p', {className: "text-sm text-voyager-orange/80"}, "Effective Date: 15 October 2025"),
                React.createElement('p', null, "This Privacy Policy explains how SHW (\"we,\" \"us,\" or \"our\") collects, uses, and protects your personal data when you use our services or website. We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."),
                React.createElement('p', {className: "text-sm italic text-voyager-blue"}, "Please Note: This is an example policy. You must consult with a legal professional to draft a policy that accurately reflects your data processing activities."),

                // Section 1: Who We Are
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "1. Who We Are"),
                React.createElement('p', null, "SHW is the data controller responsible for your personal data."),
                React.createElement('ul', { className: 'list-disc list-inside ml-4' },
                    React.createElement('li', null, React.createElement('strong', null, "Company Name:"), " SHW"),
                    React.createElement('li', null, React.createElement('strong', null, "Registered Address:"), " 77 Brookhouse Avenue, Eccles, Greater Manchester, M30 7PB"),
                    React.createElement('li', null, React.createElement('strong', null, "Contact Email:"), " scott@scott-hw.online"),
                ),

                // Section 2: The Data We Collect About You
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "2. The Data We Collect About You"),
                React.createElement('p', null, "We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                    React.createElement('li', null, React.createElement('strong', null, "Identity Data:"), " Includes first name, last name, username, marital status, title, date of birth, and gender."),
                    React.createElement('li', null, React.createElement('strong', null, "Contact Data:"), " Includes billing address, delivery address, email address, and telephone numbers."),
                    React.createElement('li', null, React.createElement('strong', null, "Technical Data:"), " Includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access this website."),
                    React.createElement('li', null, React.createElement('strong', null, "Usage Data:"), " Includes information about how you use our website, products, and services."),
                    React.createElement('li', null, React.createElement('strong', null, "Marketing and Communications Data:"), " Includes your preferences in receiving marketing from us and your communication preferences."),
                ),

                // Section 3: Lawful Basis for Processing (UK GDPR)
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "3. Lawful Basis for Processing (UK GDPR)"),
                React.createElement('p', null, "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-2' },
                    React.createElement('li', null, React.createElement('strong', null, "To register you as a new customer:"), " Identity, Contact data are used based on ", React.createElement('strong', null, "Performance of a Contract"), "."),
                    React.createElement('li', null, React.createElement('strong', null, "To process and deliver your order:"), " Identity, Contact, Financial data are used based on ", React.createElement('strong', null, "Performance of a Contract"), "."),
                    React.createElement('li', null, React.createElement('strong', null, "To manage our relationship with you:"), " Identity, Contact, Marketing data are used based on ", React.createElement('strong', null, "Necessary for our Legitimate Interests"), " (e.g., keeping our records updated)."),
                    React.createElement('li', null, React.createElement('strong', null, "To send you marketing communications:"), " Contact, Marketing data are used based on ", React.createElement('strong', null, "Consent"), " (where required) or ", React.createElement('strong', null, "Legitimate Interests"), " (for existing customers)."),
                    React.createElement('li', null, React.createElement('strong', null, "To protect our business and website:"), " Technical data is used based on ", React.createElement('strong', null, "Necessary for our Legitimate Interests"), " (e.g., security and fraud prevention)."),
                ),

                // Section 4: Data Retention
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "4. Data Retention"),
                React.createElement('p', null, "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements."),

                // Section 5: Your Legal Rights (Data Subject Rights)
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "5. Your Legal Rights (Data Subject Rights)"),
                React.createElement('p', null, "Under UK GDPR, you have the right to:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                    React.createElement('li', null, React.createElement('strong', null, "Request access"), " to your personal data (commonly known as a \"data subject access request\" or DSAR)."),
                    React.createElement('li', null, React.createElement('strong', null, "Request correction"), " of the personal data that we hold about you."),
                    React.createElement('li', null, React.createElement('strong', null, "Request erasure"), " of your personal data (the \"right to be forgotten\")."),
                    React.createElement('li', null, React.createElement('strong', null, "Object to processing"), " of your personal data where we are relying on a legitimate interest."),
                    React.createElement('li', null, React.createElement('strong', null, "Request restriction"), " of processing of your personal data."),
                    React.createElement('li', null, React.createElement('strong', null, "Request the transfer"), " of your personal data to you or a third party (data portability)."),
                    React.createElement('li', null, React.createElement('strong', null, "Withdraw consent"), " at any time where we are relying on consent to process your personal data."),
                ),

                // Section 6: International Transfers
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "6. International Transfers"),
                React.createElement('p', null, "We may share your personal data with external third parties that are based outside the UK. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                    React.createElement('li', null, "We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the UK Government."),
                    React.createElement('li', null, "Where we use certain service providers, we may use specific contracts approved by the UK Government which give personal data the same protection it has in the UK."),
                ),

                // Section 7: How to Complain
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "7. How to Complain"),
                React.createElement('p', null, "If you have any concerns about our use of your personal data, you can make a complaint to us at scott@scott-hw.online"),
                React.createElement('p', null, "You also have the right to make a complaint at any time to the UK supervisory authority for data protection issues, the Information Commissioner’s Office (ICO)."),
                React.createElement('ul', { className: 'list-disc list-inside ml-4' },
                    React.createElement('li', null, React.createElement('strong', null, "ICO Address:"), " Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF."),
                    React.createElement('li', null, React.createElement('strong', null, "ICO Website:"), " https://www.ico.org.uk/"),
                ),
            )
        ),

        // --- 2. GENERAL OPERATIONAL MANDATES (TERMS OF USE) ---
        React.createElement('div', { className: "border-l-2 border-voyager-blue pl-4 mt-8" },
            React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mb-2" }, "GENERAL OPERATIONAL MANDATES: TERMS OF USE"),
            React.createElement('p', { className: "mb-4 text-voyager-blue/80" }, "Source: SHW (scott-hw.online)"),
            
            // --- INSERTED TERMS OF USE CONTENT ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan space-y-3" },
                // Metadata
                React.createElement('p', {className: "text-sm text-voyager-orange/80"}, "Effective Date: 15 October 2025"),
                React.createElement('p', null, "Welcome to SHW's (scott-hw.online) website/service. These Terms of Use (\"Terms\") govern your use of the SHW (scott-hw.online) website and services (the \"Service\")."),

                // Section 1: Acceptance of Terms
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "1. Acceptance of Terms"),
                React.createElement('p', null, "By accessing or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with all of these Terms, then you are expressly prohibited from using the Service and must discontinue use immediately."),

                // Section 2: Intellectual Property Rights
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "2. Intellectual Property Rights"),
                React.createElement('p', null, "Unless otherwise indicated, the Service and all content, features, and functionality (including, but not limited to, all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by SHW (scott-hw.online), its licensors, or other providers of such material and are protected by UK and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."),

                // Section 3: User Obligations and Conduct
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "3. User Obligations and Conduct"),
                React.createElement('p', null, "You agree not to use the Service:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                    React.createElement('li', null, "In any way that violates any applicable UK or international law or regulation."),
                    React.createElement('li', null, "To transmit, or procure the sending of, any advertising or promotional material, including any \"junk mail,\" \"chain letter,\" \"spam,\" or any other similar solicitation."),
                    React.createElement('li', null, "To impersonate or attempt to impersonate SHW (scott-hw.online) or any person associated with us."),
                    React.createElement('li', null, "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm SHW (scott-hw.online) or users of the Service or expose them to liability."),
                ),

                // Section 4: Disclaimer of Warranties
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "4. Disclaimer of Warranties"),
                React.createElement('p', null, "The Service is provided on an \"as is\" and \"as available\" basis. SHW (scott-hw.online) makes no warranties, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, secure, or that defects will be corrected."),

                // Section 5: Limitation of Liability
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "5. Limitation of Liability"),
                React.createElement('p', null, "To the fullest extent permitted by applicable law, in no event will SHW (scott-hw.online), its affiliates, officers, directors, employees, agents, suppliers, or licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:"),
                React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                    React.createElement('li', null, "Your access to or use of or inability to access or use the Service;"),
                    React.createElement('li', null, "Any conduct or content of any third party on the Service;"),
                    React.createElement('li', null, "Any content obtained from the Service; and"),
                    React.createElement('li', null, "Unauthorised access, use, or alteration of your transmissions or content."),
                ),

                // Section 6: Termination
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "6. Termination"),
                React.createElement('p', null, "We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, if you breach the Terms. Upon termination, your right to use the Service will immediately cease."),

                // Section 7: Governing Law
                React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, "7. Governing Law"),
                React.createElement('p', null, "These Terms and your use of the Service are governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in England and Wales."),
            )
        ),
        
        // --- NEW ADMIN LOGIN BUTTON ---
        React.createElement('div', {className: "mt-12 pt-4 border-t-2 border-voyager-orange/50 flex flex-col items-start"},
            React.createElement('p', {className: "mb-3 text-voyager-tan/70 font-mono"}, "--- CLASSIFIED STARFLEET OPS ---"),
            React.createElement('button', {
                onClick: handleGitHubLogin,
                className: "bg-voyager-purple hover:bg-voyager-orange text-black font-bold py-2 px-4 transition-colors font-orbitron text-sm shadow-glow-accent",
            }, "ADMIN ACCESS | CMI Login (GitHub)")
        )
    )
);


export const SECTIONS: Record<SectionName, Section> = {
    about: {
        id: 'about',
        title: 'Personal Bio',
        content: React.createElement(AboutContent),
    },
    projects: {
        id: 'projects',
        title: 'Mission Logs',
        content: React.createElement(ProjectsContent),
    },
    'mission-update': {
        id: 'mission-update',
        title: 'Mission Update',
        content: React.createElement(MissionUpdateContent),
    },
    contact: {
        id: 'contact',
        title: 'Comms Channel',
        content: React.createElement(ContactContent),
    },
    // NEW SECTION ADDED
    policies: {
        id: 'policies',
        title: 'Starfleet Protocols',
        content: React.createElement(PoliciesContent),
    },
};
