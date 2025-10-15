import React from 'react';
import { Section, SectionName } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, UserIcon, PhoneIcon, ShieldIcon } from './components/Icons';

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
            
            // --- INSERT PRIVACY POLICY CONTENT HERE ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan" },
                React.createElement('p', null, "Privacy Policy\n \nEffective Date: 15 October 2025\n \n This Privacy Policy explains how SHW (scott-hw.online) ('we,' 'us,' or 'our') collects, uses, and protects your personal data when you use our services or website. We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. \n \nPlease Note: This is an example policy. You must consult with a legal professional to draft a policy that accurately reflects your data processing activities. \n \n1. Who We Are 

SHW is the data controller responsible for your personal data. 

Company Name: SHW 

Registered Address: 77 Brookhouse Avenue, Eccles, Greater Manchester, M30 7PB 

Contact Email: scott@scott-hw.online 

2. The Data We Collect About You 

We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows: 

Identity Data: Includes first name, last name, username, marital status, title, date of birth, and gender. 

Contact Data: Includes billing address, delivery address, email address, and telephone numbers. 

Technical Data: Includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform, and other technology on the devices you use to access this website. 

Usage Data: Includes information about how you use our website, products, and services. 

Marketing and Communications Data: Includes your preferences in receiving marketing from us and your communication preferences. 

3. Lawful Basis for Processing (UK GDPR) 

We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: 

Purpose of Processing 

Example Data Used 

Lawful Basis under UK GDPR 

To register you as a new customer 

Identity, Contact 

Performance of a Contract 

To process and deliver your order 

Identity, Contact, Financial 

Performance of a Contract 

To manage our relationship with you 

Identity, Contact, Marketing 

Necessary for our Legitimate Interests (e.g., keeping our records updated) 

To send you marketing communications 

Contact, Marketing 

Consent (where required) or Legitimate Interests (for existing customers) 

To protect our business and website 

Technical 

Necessary for our Legitimate Interests (e.g., security and fraud prevention) 

4. Data Retention 

We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. 

5. Your Legal Rights (Data Subject Rights) 

Under UK GDPR, you have the right to: 

Request access to your personal data (commonly known as a "data subject access request" or DSAR). 

Request correction of the personal data that we hold about you. 

Request erasure of your personal data (the "right to be forgotten"). 

Object to processing of your personal data where we are relying on a legitimate interest. 

Request restriction of processing of your personal data. 

Request the transfer of your personal data to you or a third party (data portability). 

Withdraw consent at any time where we are relying on consent to process your personal data. 

6. International Transfers 

We may share your personal data with external third parties that are based outside the UK. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented: 

We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the UK Government. 

Where we use certain service providers, we may use specific contracts approved by the UK Government which give personal data the same protection it has in the UK. 

7. How to Complain 

If you have any concerns about our use of your personal data, you can make a complaint to us at scott@scott-hw.online 

You also have the right to make a complaint at any time to the UK supervisory authority for data protection issues, the Information Commissioner’s Office (ICO). 

ICO Address: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF. 

ICO Website: https://www.ico.org.uk/ 

 

 ")
            )
            // --- END PRIVACY POLICY CONTENT ---
        ),

        // --- 2. GENERAL OPERATIONAL MANDATES (TERMS OF USE) ---
        React.createElement('div', { className: "border-l-2 border-voyager-blue pl-4 mt-8" },
            React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mb-2" }, "GENERAL OPERATIONAL MANDATES: TERMS OF USE"),
            
            // --- INSERT TERMS OF USE CONTENT HERE ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan" },
                React.createElement('p', null, "The full content of your **Terms of Use** (from your second SharePoint document) must be manually inserted here. As above, ensure all text is enclosed in React.createElement calls to render correctly.")
            )
            // --- END TERMS OF USE CONTENT ---
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
