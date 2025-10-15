import React, { useState } from 'react';

interface CmiInterfaceProps {
    onLogout: () => void;
}

// --- SIMULATED DATA STORE ---
// NOTE: This initial data structure simulates the content loaded from data.json,
// allowing the CMI to demonstrate editing functionality locally.
const initialProjectLogs = [
    { id: 1, title: "Starship Portfolio Interface", stardate: "2025.Q3", summary: "Required navigating uncharted sectors of React and TypeScript..." },
    { id: 2, title: "Code Institute 5 Day Challenge", stardate: "2025.Q2", summary: "A 5-day rapid deployment exercise to construct a functional web interface..." },
    { id: 3, title: "Cheat Sheets", stardate: "2025.Q1", summary: "Centralized repository for vital operational schematics and command syntax guides..." },
    { id: 4, title: "MathTool", stardate: "2025.Q1", summary: "Engineered to deploy a tactical mathematics simulator..." },
];

const initialMissionUpdates = [
    { id: 1, stardate: "2025.09", directive: "Directive M250 (Object-Oriented Java Programming)", status: "Active" },
    { id: 2, stardate: "2024.08", directive: "TM112 project phase", status: "Completed" },
    { id: 3, stardate: "2023.10", directive: "Commissioned to a long-term mission with the Open University (OU)", status: "Completed" },
];

const initialProtocols = [
    { id: 1, title: "DATA PROTECTION DIRECTIVE", type: "Privacy Policy", summary: "Explains how SHW collects, uses, and protects your personal data in compliance with UK GDPR." },
    { id: 2, title: "GENERAL OPERATIONAL MANDATES", type: "Terms of Use", summary: "Governs your use of the SHW website and services." },
];
// ----------------------------

const ContentSection: React.FC<{ title: string, isActive: boolean, onClick: () => void }> = ({ title, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-orbitron uppercase transition-colors ${
            isActive ? 'bg-voyager-orange text-black font-bold' : 'bg-voyager-purple/50 text-voyager-tan hover:bg-voyager-purple'
        }`}
    >
        {title}
    </button>
);

export const CmiInterface: React.FC<CmiInterfaceProps> = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState<'logs' | 'updates' | 'protocols'>('logs');
    // State management for CRUD simulation:
    const [projectLogs, setProjectLogs] = useState(initialProjectLogs);
    const [missionUpdates, setMissionUpdates] = useState(initialMissionUpdates);
    const [protocols, setProtocols] = useState(initialProtocols);
    const [editItem, setEditItem] = useState<any>(null); // Stores item currently being edited

    const currentData = activeTab === 'logs' ? projectLogs : activeTab === 'updates' ? missionUpdates : protocols;
    const setCurrentData = activeTab === 'logs' ? setProjectLogs : activeTab === 'updates' ? setMissionUpdates : setProtocols;

    // --- CRUD FUNCTIONS (SIMULATED) ---

    const handleAdd = () => {
        let newItem: any;
        // Logic for creating a new blank entry based on the active tab
        if (activeTab === 'logs') {
            newItem = { id: Date.now(), title: 'NEW MISSION LOG', stardate: '2025.Q4', summary: 'New project summary...' };
        } else if (activeTab === 'updates') {
            newItem = { id: Date.now(), stardate: '2025.10', directive: 'New Training Directive', status: 'Pending' };
        } else {
            newItem = { id: Date.now(), title: 'NEW PROTOCOL', type: 'Regulation', summary: 'New protocol summary...' };
        }
        setCurrentData([...currentData, newItem]);
        setEditItem(newItem);
    };

    const handleDelete = (id: number) => {
        if (window.confirm(`Confirm deletion of item ID ${id}. THIS ACTION IS LOCAL ONLY.`)) {
            setCurrentData(currentData.filter(item => item.id !== id));
            setEditItem(null);
            alert("SIMULATION: Item deleted locally.");
        }
    };

    const handleSaveEdit = (e: React.FormEvent) => {
        e.preventDefault();
        // Update the item in the local state array
        setCurrentData(currentData.map(item => (item.id === editItem.id ? editItem : item)));
        setEditItem(null);
        alert("SIMULATION: Changes applied locally. Remember to update constants.ts/data.json to publish.");
    };

    const handleSaveAll = () => {
        alert("SIMULATION: All changes saved locally in this session only. You must manually edit and commit changes to the source files (data.json) to publish to the live site.");
    };
    
    // --- RENDER FUNCTIONS ---
    
    const renderTable = () => (
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-voyager-orange">
                    <th className="py-2 px-4 text-voyager-orange">ID</th>
                    <th className="py-2 px-4 text-voyager-orange">{activeTab === 'logs' ? 'Title' : 'Directive/Protocol'}</th>
                    <th className="py-2 px-4 text-voyager-orange">{activeTab === 'logs' || activeTab === 'updates' ? 'Stardate' : 'Type'}</th>
                    <th className="py-2 px-4 text-voyager-orange">Actions</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((item: any) => (
                    <tr key={item.id} className="border-b border-voyager-blue/50 hover:bg-black/30 transition-colors">
                        <td className="py-2 px-4">{item.id}</td>
                        <td className="py-2 px-4">{item.title || item.directive}</td>
                        <td className="py-2 px-4">{item.stardate || item.type}</td>
                        <td className="py-2 px-4 flex gap-2">
                            <button onClick={() => setEditItem(item)} className="text-voyager-blue hover:text-voyager-orange text-sm">Update</button>
                            <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-300 text-sm">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderEditor = () => {
        if (!editItem) return null;
        
        // Define fields based on the active tab
        const fields = activeTab === 'logs' ? [
            { key: 'title', label: 'Mission Title' },
            { key: 'stardate', label: 'Stardate' },
            { key: 'summary', label: 'Summary', type: 'textarea' },
        ] : activeTab === 'updates' ? [
            { key: 'stardate', label: 'Stardate' },
            { key: 'directive', label: 'Directive Name' },
            { key: 'status', label: 'Status (e.g., Active/Completed)' },
        ] : [
            { key: 'title', label: 'Protocol Title' },
            { key: 'type', label: 'Protocol Type (e.g., Privacy/Terms)' },
            { key: 'summary', label: 'Summary', type: 'textarea' },
        ];

        return (
            <form onSubmit={handleSaveEdit} className="bg-black/50 p-4 border border-voyager-orange mt-6 space-y-3">
                <h5 className="text-voyager-orange font-orbitron text-xl">Editing: {editItem.title || editItem.directive} (ID: {editItem.id})</h5>
                {fields.map(field => (
                    <div key={field.key} className="flex flex-col">
                        <label className="text-sm text-voyager-blue mb-1">{field.label}</label>
                        {field.type === 'textarea' ? (
                            <textarea
                                value={editItem[field.key]}
                                onChange={(e) => setEditItem({ ...editItem, [field.key]: e.target.value })}
                                className="bg-black/70 border border-voyager-blue/50 p-2 text-voyager-tan resize-none"
                                rows={5}
                            />
                        ) : (
                            <input
                                type="text"
                                value={editItem[field.key]}
                                onChange={(e) => setEditItem({ ...editItem, [field.key]: e.target.value })}
                                className="bg-black/70 border border-voyager-blue/50 p-2 text-voyager-tan"
                            />
                        )}
                    </div>
                ))}
                <div className="flex justify-end gap-3">
                    <button type="button" onClick={() => setEditItem(null)} className="bg-gray-700 hover:bg-gray-600 text-voyager-tan py-2 px-4 transition-colors font-orbitron">
                        CANCEL
                    </button>
                    <button type="submit" className="bg-voyager-orange hover:bg-voyager-blue text-black font-bold py-2 px-4 transition-colors font-orbitron">
                        UPDATE ITEM
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div className="bg-black/70 border border-voyager-orange/50 h-full flex flex-col p-6 backdrop-blur-sm font-mono overflow-auto">
            <div className="flex justify-between items-center mb-6 border-b-2 border-voyager-orange pb-3 flex-wrap">
                <h2 className="text-xl sm:text-3xl font-orbitron text-voyager-orange">COMMAND INTERFACE: CMI V1.0</h2>
                <button 
                    onClick={onLogout} 
                    className="bg-voyager-orange hover:bg-voyager-blue text-black font-bold py-1 px-3 transition-colors font-orbitron text-sm mt-2 sm:mt-0"
                >
                    LOGOUT
                </button>
            </div>
            
            <div className="flex gap-2 mb-6 border-b border-voyager-blue pb-2">
                <ContentSection title="Mission Logs (Projects)" isActive={activeTab === 'logs'} onClick={() => setActiveTab('logs')} />
                <ContentSection title="Mission Updates" isActive={activeTab === 'updates'} onClick={() => setActiveTab('updates')} />
                <ContentSection title="Protocols" isActive={activeTab === 'protocols'} onClick={() => setActiveTab('protocols')} />
            </div>

            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-voyager-blue font-orbitron uppercase">{activeTab.toUpperCase()} Manager</h3>
                <div className="flex gap-3">
                    <button onClick={handleAdd} className="bg-green-700 hover:bg-green-600 text-voyager-tan font-bold py-2 px-4 transition-colors font-orbitron text-sm">
                        + ADD NEW
                    </button>
                    <button onClick={handleSaveAll} className="bg-voyager-blue hover:bg-voyager-tan text-black font-bold py-2 px-4 transition-colors font-orbitron text-sm">
                        SAVE ALL (LOCAL ONLY)
                    </button>
                </div>
            </div>

            <div className="flex-grow overflow-auto">
                {renderTable()}
            </div>
            
            {renderEditor()}
        </div>
    );
};
