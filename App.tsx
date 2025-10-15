import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { UnlockedSection } from './components/UnlockedSection';
import { SECTIONS } from './constants';
import { SectionName, Section } from './types';
import { CmiInterface } from './components/CmiInterface'; // NEW IMPORT
import { BackgroundEffects } from './components/BackgroundEffects';


const HomeScreen: React.FC = () => (
  <div className="flex items-center justify-center h-full bg-black/50 border border-voyager-blue/20 p-4">
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-orbitron text-voyager-blue">SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</h2>
      <p className="mt-4 text-voyager-tan">Select a database from the navigation panel to view records.</p>
    </div>
  </div>
);

const NavButton: React.FC<{label: string, onClick: () => void, isActive: boolean}> = ({ label, onClick, isActive }) => (
    <button
        onClick={onClick}
        className={`w-full text-right font-orbitron uppercase text-base md:text-lg px-4 py-2 transition-colors duration-200 ${
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
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(new Date());

  // --- NEW STATES FOR AUTH, DATA, AND LOADING ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCmiMode, setIsCmiMode] = useState(false);
  const [appData, setAppData] = useState<any>(null); 
  const [isLoading, setIsLoading] = useState(true);
  // ---------------------------------------------

  // --- AUTHENTICATION LOGIC ---
  const handleLocalMockLogin = () => {
    // 🛑 WARNING: This data is visible in the browser source code.
    const EXPECTED_USERNAME = 'scott-hw-ou';
    const EXPECTED_PASSWORD = 'Brookhouse01!';

    const inputUsername = window.prompt("Starfleet Admin Login\nEnter Username:");
    if (inputUsername === null) return; 

    if (inputUsername !== EXPECTED_USERNAME) {
        alert("ACCESS DENIAL: Username not recognized.");
        return;
    }

    const inputPassword = window.prompt(`Password required for ${EXPECTED_USERNAME}:`);
    if (inputPassword === null) return; 

    if (inputPassword === EXPECTED_PASSWORD) {
        setIsLoggedIn(true);
        alert("ACCESS GRANTED. Welcome, Commander. Initiating Content Management View.");
        setCurrentView(null);
    } else {
        alert("ACCESS DENIAL: Incorrect password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsCmiMode(false);
    setCurrentView(null);
  };
  // -----------------------------

  // --- DATA FETCHING LOGIC ---
  useEffect(() => {
    // Fetch data from the new location
    fetch('/content/data.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setAppData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load app data:", err);
        setIsLoading(false);
        alert("ERROR: Failed to load core Starship manifests (data.json). Check console for details.");
      });
  }, []);
  // ---------------------------

  // --- STANDARD EFFECTS ---
  React.useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const toggleMute = () => {
      const audioEl = audioRef.current;
      if (!audioEl) return;

      if (audioEl.paused) {
          audioEl.volume = 0.1;
          audioEl.play().catch(e => console.error("Audio play failed:", e));
          setIsMuted(false);
      } else {
          audioEl.pause();
          setIsMuted(true);
      }
  };
  // ------------------------

  // --- DATA INJECTION & SECTION GENERATION ---
  const getCurrentSection = () => {
    if (!currentView || !appData) return null;

    const baseSection = sections[currentView];
    
    // 1. Clone and inject the fetched data prop into the component instance
    const updatedContent = React.cloneElement(baseSection.content as React.ReactElement, { data: appData });

    // 2. Handle policies section specifically for injecting login handlers
    if (currentView === 'policies') {
        return {
            ...baseSection,
            content: React.cloneElement(updatedContent, { onLoginSuccess: handleLocalMockLogin, isLoggedIn: isLoggedIn, onLogout: handleLogout }),
        };
    }

    return { ...baseSection, content: updatedContent };
  };

  const currentSection = getCurrentSection();
  // -------------------------------------------

  // --- CONDITIONAL RENDERING ---
  if (isLoading) {
    return (
      <div className="bg-voyager-bg min-h-screen text-voyager-tan font-mono flex items-center justify-center">
          <p className="text-xl font-orbitron text-voyager-blue animate-pulse">LOADING STARSHIP MANIFESTS...</p>
      </div>
    );
  }

  return (
    <div className="bg-voyager-bg min-h-screen text-voyager-tan font-mono flex flex-col p-2 sm:p-4">
      <audio ref={audioRef} src="/Media/ambient.mp3" loop />
      <Header isMuted={isMuted} toggleMute={toggleMute} />
      <BackgroundEffects />
      <main className="flex-grow flex flex-col md:flex-row gap-4 mt-4 overflow-hidden">
        <nav className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2 md:gap-4">
          {Object.values(sections).map(section => (
              <NavButton
                  key={section.id}
                  label={section.title}
                  onClick={() => {
                      setCurrentView(section.id);
                      setIsCmiMode(false);
                  }}
                  isActive={currentView === section.id && !isCmiMode}
              />
          ))}
          
          {/* CMI NAVIGATION BUTTON - Visible when logged in */}
          {isLoggedIn && (
              <NavButton
                  label="CONTENT MANAGER"
                  onClick={() => {
                      setCurrentView(null);
                      setIsCmiMode(true);
                  }}
                  isActive={isCmiMode}
              />
          )}
        </nav>
        <div className="flex-grow w-full animate-fadeIn">
          {/* RENDER CMI INTERFACE */}
          {isCmiMode && isLoggedIn ? (
            <CmiInterface onLogout={handleLogout} />
          ) : currentSection ? (
            <UnlockedSection
              section={currentSection}
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
