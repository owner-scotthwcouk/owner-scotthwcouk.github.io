import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { UnlockedSection } from './components/UnlockedSection';
import { SECTIONS } from './constants';
import { SectionName, Section } from './types';

// Simple component for the home screen view
const HomeScreen: React.FC = () => (
  <div className="flex items-center justify-center h-full bg-black/50 border border-voyager-blue/20 p-4">
    <div className="text-center">
      <h2 className="text-3xl font-orbitron text-voyager-blue">SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</h2>
      <p className="mt-4 text-voyager-tan">Select a database from the navigation panel to view records.</p>
    </div>
  </div>
);

// Navigation Button component styled for LCARS
const NavButton: React.FC<{label: string, onClick: () => void, isActive: boolean}> = ({ label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`w-full text-right font-orbitron uppercase text-lg px-4 py-2 transition-colors duration-200 ${
            isActive
                ? 'bg-voyager-orange text-black'
                : 'bg-voyager-purple text-voyager-tan hover:bg-voyager-blue hover:text-black'
        }`}
    >
        {label}
    </button>
);


const App: React.FC = () => {
  const [sections] = useState<Record<SectionName, Section>>(SECTIONS);
  const [currentView, setCurrentView] = useState<SectionName | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasPlayed = useRef(false);

  const handleFirstInteraction = () => {
    // Only try to play on the very first interaction
    if (!hasPlayed.current && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed on interaction:", error);
      });
      hasPlayed.current = true;
    }
  };

  return (
    <div className="bg-voyager-bg min-h-screen text-voyager-tan font-mono flex flex-col p-2 sm:p-4" onClick={handleFirstInteraction}>
      <audio ref={audioRef} src="/Media/Bridge Ambient Sound.mp3" loop />
      <Header />
      <main className="flex-grow flex flex-col md:flex-row gap-4 mt-4 overflow-hidden">

        {/* LCARS Side Navigation Panel */}
        <nav className="w-full md:w-64 flex-shrink-0 flex md:flex-col gap-4">
          {Object.values(sections).map(section => (
              <NavButton
                  key={section.id}
                  label={section.title}
                  onClick={() => setCurrentView(section.id)}
                  isActive={currentView === section.id}
              />
          ))}
        </nav>

        {/* Main Content Display */}
        <div className="flex-grow w-full animate-fadeIn">
          {currentView && sections[currentView] ? (
            <UnlockedSection
              section={sections[currentView]}
              onClose={() => setCurrentView(null)}
            />
          ) : (
            <HomeScreen />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;