import React from 'react';
import { Section, SectionName } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, UserIcon, PhoneIcon } from './components/Icons';

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
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                    React.createElement('a', {
                        href: "https://github.com/Scott-oustudent/code-institute-5-day-coding-challenge-",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: 'inherit', textDecoration: 'none' }
                    }, "Code Institute 5 Day Challenge")
                ),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2023.Q4"),
                React.createElement('p', { className: "mt-2" }, "I embarked on Mission Directive: A 5-day rapid deployment exercise to construct a functional web interface.)"),
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
                React.createElement('p', { className: "mt-2" }, "Class Selectors: Applied standard visual protocols to multiple components, allowing for efficient and reusable styling across the fleet of elements.)"),
            ),
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" }, "Project Chimera"),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2022.Q2"),
                React.createElement('p', { className: "mt-2" }, "Led the frontend overhaul of the inter-ship communication system. Migrated a legacy Angular codebase to a modern Next.js application, improving performance by 300% and enhancing user experience for over 50,000 crew members.")
            ),
            React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4" },
                React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" }, "Project Stargate"),
                React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: 2021.Q1"),
                React.createElement('p', { className: "mt-2" }, "Engineered a cross-platform component library for the Galactic Federation's internal toolkit. Ensured WCAG 2.1 AA accessibility compliance and created comprehensive documentation, accelerating development cycles for dozens of engineering teams.")
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
            React.createElement('a', { href: "mailto:Scott@scotthw.co.uk", className: "flex items-center group" },
                React.createElement(MailIcon, { className: "w-6 h-6 mr-3 text-voyager-blue group-hover:text-voyager-orange transition-colors" }),
                React.createElement('span', { className: "text-voyager-tan group-hover:underline" }, "Scott@scotthw.co.uk")
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
};