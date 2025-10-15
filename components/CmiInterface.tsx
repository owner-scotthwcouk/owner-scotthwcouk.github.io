import React from 'react';

interface CmiInterfaceProps {
    onLogout: () => void;
}

export const CmiInterface: React.FC<CmiInterfaceProps> = ({ onLogout }) => {
    const [editorContent, setEditorContent] = React.useState("Welcome, Commander Scott! This is the simulated Content Management Interface (CMI). You are currently editing the content for the Mission Assignment section. Changes made here are only visible in your current browser session and will NOT be saved to GitHub. To update the live site, you must manually commit changes to the 'constants.ts' file in your repository.");

    // This is a local simulation. It does NOT save to the GitHub repository.
    const handleSave = () => {
        alert("SIMULATION: Content changes applied locally in this session only. To publish, edit the source files.");
    };

    return (
        <div className="bg-black/70 border border-voyager-orange/50 h-full flex flex-col p-6 backdrop-blur-sm font-mono overflow-auto">
            <div className="flex justify-between items-center mb-6 border-b-2 border-voyager-orange pb-3 flex-wrap">
                <h2 className="text-xl sm:text-3xl font-orbitron text-voyager-orange">COMMAND INTERFACE: MISSION LOGS</h2>
                <button 
                    onClick={onLogout} 
                    className="bg-voyager-orange hover:bg-voyager-blue text-black font-bold py-1 px-3 transition-colors font-orbitron text-sm mt-2 sm:mt-0"
                >
                    LOGOUT
                </button>
            </div>
            
            <h3 className="text-xl text-voyager-blue mb-2">Edit: Mission Assignment Content (Simulated)</h3>
            
            <textarea
                value={editorContent}
                onChange={(e) => setEditorContent(e.target.value)}
                className="flex-grow w-full bg-black/50 border border-voyager-blue p-3 text-voyager-tan font-mono resize-none"
                style={{ minHeight: '300px' }}
                placeholder="Enter new mission update content here. Remember to use Markdown or simple formatting."
            />
            
            <div className="mt-4 flex justify-end gap-3">
                <button 
                    onClick={handleSave} 
                    className="bg-voyager-blue hover:bg-voyager-tan text-black font-bold py-2 px-4 transition-colors font-orbitron"
                >
                    APPLY CHANGES (SIMULATED SAVE)
                </button>
            </div>
        </div>
    );
};
