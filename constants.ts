import React from 'react';
import { Section, SectionName } from './types';
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, UserIcon, PhoneIcon, ShieldIcon } from './components/Icons';

// --- DATA TYPE DEFINITION (Simplified, but reflects data.json structure) ---
interface AppData {
    about: any;
    projects: any[];
    'mission-update': any;
    contact: any;
    protocols: any;
}

// Define interface for the section content components
interface DataDrivenContentProps {
    data: AppData;
    onLoginSuccess?: () => void;
    isLoggedIn?: boolean;
    onLogout?: () => void;
}

// FIX: The following components are defined using React.createElement to avoid JSX.
// They now require the 'data' prop to render.

const AboutContent: React.FC<DataDrivenContentProps> = ({ data }) => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(UserIcon, { className: "w-6 h-6 mr-2" }),
            data.about.title
        ),
        React.createElement('img', { 
            src: data.about.image,
            alt: "Scott Harvey-Whittle", 
            className: "w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        }),
        data.about.paragraphs.map((p: string, index: number) => (
            React.createElement('p', { className: index < data.about.paragraphs.length - 1 ? "mb-4" : "" , key: index }, p)
        ))
    )
);

const ProjectsContent: React.FC<DataDrivenContentProps> = ({ data }) => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(CodeIcon, { className: "w-6 h-6 mr-2" }),
            "MISSION LOGS: PROJECT ARCHIVES"
        ),
        React.createElement('div', { className: "space-y-6" },
            data.projects.map((project: any, index: number) => (
                React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4", key: index },
                    React.createElement('h4', { className: "text-xl text-voyager-tan font-bold" },
                        React.createElement('a', {
                            href: project.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { color: 'inherit', textDecoration: 'none' }
                        }, project.title)
                    ),
                    React.createElement('p', { className: "text-sm text-voyager-blue" }, "Stardate: " + project.stardate),
                    React.createElement('p', { className: "mt-2" }, project.summary),
                    project.details && project.details.map((detail: any, dIndex: number) => (
                        React.createElement(React.Fragment, { key: dIndex },
                            React.createElement('h4', { className: "text-l text-voyager-tan font-bold mt-2" }, detail.heading),
                            detail.items.map((item: string, iIndex: number) => (
                                React.createElement('p', { className: "mt-2", key: iIndex }, item)
                            ))
                        )
                    ))
                )
            ))
        )
    )
);

const ContactContent: React.FC<DataDrivenContentProps> = ({ data }) => {
    const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = { GithubIcon, LinkedinIcon, MailIcon };

    return (
        React.createElement('div', null,
            React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
                React.createElement(PhoneIcon, { className: "w-6 h-6 mr-2" }),
                data.contact.title
            ),
            React.createElement('p', { className: "mb-6" }, data.contact.intro),
            React.createElement('div', { className: "space-y-4" },
                data.contact.channels.map((channel: any, index: number) => {
                    const Icon = iconMap[channel.icon];
                    return React.createElement('a', { 
                        href: channel.href, 
                        key: index,
                        target: "_blank", 
                        rel: "noopener noreferrer", 
                        className: "flex items-center group" 
                    },
                        Icon && React.createElement(Icon, { className: "w-6 h-6 mr-3 text-voyager-blue group-hover:text-voyager-orange transition-colors" }),
                        React.createElement('span', { className: "text-voyager-tan group-hover:underline" }, channel.value)
                    )
                })
            )
        )
    );
};

const MissionUpdateContent: React.FC<DataDrivenContentProps> = ({ data }) => (
    React.createElement('div', null,
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(CodeIcon, { className: "w-6 h-6 mr-2" }),
            data['mission-update'].title
        ),
        React.createElement('div', { className: "space-y-4" },
            data['mission-update'].updates.map((update: any, index: number) => (
                React.createElement('p', { key: index }, 
                    React.createElement('strong', { className: "text-voyager-blue" }, "Stardate " + update.stardate + ": "), 
                    update.text
                )
            )),
            data['mission-update'].directives.map((directive: any, index: number) => (
                React.createElement('div', { className: "border-l-2 border-voyager-orange pl-4", key: index },
                    React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mt-4" }, directive.heading),
                    React.createElement('p', { className: "mt-2" }, directive.text),
                    directive.items && React.createElement('ul', { className: "list-disc list-inside mt-2 pl-4 space-y-1" },
                        directive.items.map((item: string, iIndex: number) => {
                            const parts = item.split(':');
                            return React.createElement('li', { key: iIndex }, 
                                parts.length > 1 ? (
                                    React.createElement('strong', null, parts[0] + ":") + parts.slice(1).join(':')
                                ) : item
                            )
                        })
                    )
                )
            ))
        )
    )
);

const PoliciesContent: React.FC<DataDrivenContentProps> = ({ data, onLoginSuccess, isLoggedIn, onLogout }) => (
    React.createElement('div', { className: "space-y-8" },
        React.createElement('h3', { className: "text-2xl font-orbitron text-voyager-orange mb-4 flex items-center" },
            React.createElement(ShieldIcon, { className: "w-6 h-6 mr-2" }),
            "STARFLEET PROTOCOLS: REGULATIONS & GENERAL ORDERS"
        ),
        
        // --- 1. DATA PROTECTION DIRECTIVE (PRIVACY POLICY) ---
        React.createElement('div', { className: "border-l-2 border-voyager-blue pl-4" },
            React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mb-2" }, data.protocols.privacy.title),
            React.createElement('p', { className: "mb-4 text-voyager-blue/80" }, "Source: " + data.protocols.privacy.source),
            
            // --- PRIVACY POLICY CONTENT ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan space-y-3" },
                React.createElement('p', {className: "text-sm text-voyager-orange/80"}, "Effective Date: " + data.protocols.privacy.effective_date),
                data.protocols.privacy.sections.map((section: any, index: number) => (
                    React.createElement(React.Fragment, { key: index },
                        React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, section.heading),
                        section.intro && React.createElement('p', null, section.intro),
                        section.type === 'paragraph' && React.createElement('p', null, section.text),
                        section.type === 'list' && React.createElement('ul', { className: 'list-disc list-inside ml-4 ' + (index > 0 ? 'space-y-1' : '') },
                            section.items.map((item: string, iIndex: number) => {
                                const parts = item.split(':');
                                return React.createElement('li', { key: iIndex }, 
                                    parts.length > 1 ? (
                                        React.createElement('strong', null, parts[0] + ":") + parts.slice(1).join(':')
                                    ) : item
                                )
                            })
                        )
                    )
                ))
            )
        ),

        // --- 2. GENERAL OPERATIONAL MANDATES (TERMS OF USE) ---
        React.createElement('div', { className: "border-l-2 border-voyager-blue pl-4 mt-8" },
            React.createElement('h4', { className: "text-xl text-voyager-tan font-bold mb-2" }, data.protocols.terms.title),
            React.createElement('p', { className: "mb-4 text-voyager-blue/80" }, "Source: " + data.protocols.terms.source),
            
            // --- TERMS OF USE CONTENT ---
            React.createElement('div', { className: "mt-4 p-4 border border-voyager-blue/50 bg-black/30 text-voyager-tan space-y-3" },
                React.createElement('p', {className: "text-sm text-voyager-orange/80"}, "Effective Date: " + data.protocols.terms.effective_date),
                data.protocols.terms.sections.map((section: any, index: number) => (
                    React.createElement(React.Fragment, { key: index },
                        React.createElement('h5', { className: 'text-lg text-voyager-orange mt-4' }, section.heading),
                        section.intro && React.createElement('p', null, section.intro),
                        section.type === 'paragraph' && React.createElement('p', null, section.text),
                        section.type === 'list' && React.createElement('ul', { className: 'list-disc list-inside ml-4 space-y-1' },
                            section.items.map((item: string, iIndex: number) => (
                                React.createElement('li', { key: iIndex }, item)
                            ))
                        )
                    )
                ))
            )
        ),
        
        // --- NEW ADMIN LOGIN BUTTON ---
        React.createElement('div', {className: "mt-12 pt-4 border-t-2 border-voyager-orange/50 flex flex-col items-start"},
            React.createElement('p', {className: "mb-3 text-voyager-tan/70 font-mono"}, "--- CLASSIFIED STARFLEET OPS ---"),
            // Conditional Button Rendering using props from App.tsx
            isLoggedIn ? (
                React.createElement('button', {
                    onClick: onLogout,
                    className: "bg-voyager-orange hover:bg-voyager-red text-black font-bold py-2 px-4 transition-colors font-orbitron text-sm shadow-glow-accent",
                }, "LOGOUT (COMMANDER)")
            ) : (
                React.createElement('button', {
                    onClick: onLoginSuccess,
                    className: "bg-voyager-purple hover:bg-voyager-orange text-black font-bold py-2 px-4 transition-colors font-orbitron text-sm shadow-glow-accent",
                }, "ADMIN ACCESS | CMI Login")
            )
        )
    )
);


export const SECTIONS: Record<SectionName, Section> = {
    about: {
        id: 'about',
        title: 'Personal Bio',
        content: React.createElement(AboutContent, { data: {} }), // Placeholder for data prop
    },
    projects: {
        id: 'projects',
        title: 'Mission Logs',
        content: React.createElement(ProjectsContent, { data: {} }), // Placeholder for data prop
    },
    'mission-update': {
        id: 'mission-update',
        title: 'Mission Update',
        content: React.createElement(MissionUpdateContent, { data: {} }), // Placeholder for data prop
    },
    contact: {
        id: 'contact',
        title: 'Comms Channel',
        content: React.createElement(ContactContent, { data: {} }), // Placeholder for data prop
    },
    // NEW SECTION ADDED
    policies: {
        id: 'policies',
        title: 'Starfleet Protocols',
        content: React.createElement(PoliciesContent, { data: {} }), // Placeholder for data prop
    },
};
