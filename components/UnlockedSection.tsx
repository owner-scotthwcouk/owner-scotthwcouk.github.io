import React from 'react';
import { Section } from '../types';

interface UnlockedSectionProps {
  section: Section;
  onClose: () => void;
}

export const UnlockedSection: React.FC<UnlockedSectionProps> = ({ section, onClose }) => {
  return (
    <div className="bg-black/50 border border-voyager-blue/30 h-full flex flex-col p-4 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-4 border-b-2 border-voyager-orange pb-2">
        <h2 className="text-2xl font-orbitron text-voyager-orange">ACCESSING: {section.title.toUpperCase()}</h2>
        <button 
            onClick={onClose} 
            className="bg-voyager-purple hover:bg-voyager-blue text-black font-bold py-1 px-3 transition-colors"
        >
          CLOSE
        </button>
      </div>
      <div className="flex-grow overflow-y-auto pr-2 text-voyager-tan">
        {section.content}
      </div>
    </div>
  );
};