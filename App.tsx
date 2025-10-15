import React, { useState, useRef, useEffect } from 'react';
import { Header } from './components/Header';
import { UnlockedSection } from './components/UnlockedSection';
import { SECTIONS } from './constants';
import { SectionName, Section } from './types';
import { CmiInterface } from './components/CmiInterface';
import { BackgroundEffects } from './components/BackgroundEffects';

// Utility to handle asset path for both Netlify root and GitHub Pages
const getBasePath = () => {
  const path = window.location.pathname;
  if (path.startsWith('/owner-scotthwcouk.github.io')) {
    return '/owner-scotthwcouk.github.io/public/';
  }
  return '/public/';
};

const App: React.FC = () => {
  const [sections] = useState(SECTIONS);
  const [currentView, setCurrentView] = useState<SectionName | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [time, setTime] = useState(new Date());

  // Application States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCmiMode, setIsCmiMode] = useState(false);
  const [appData, setAppData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Authentication logic
  const handleLocalMockLogin = () => {
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

  // Data fetching logic (fixed for Netlify/GitHub Pages)
  useEffect(() => {
    const BASE_PATH = getBasePath();
    fetch(`${BASE_PATH}content/data.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok, status: ' + res.status);
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
      });
  }, []);

  // Timer effect
  useEffect(() => {
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

  // Section and conditional rendering logic...
  const getCurrentSection = () => {
    if (!currentView || !appData) return null;
    const baseSection = sections[currentView];
    const updatedContent = React.cloneElement(baseSection.content as React.ReactElement, { data: appData });
    if (currentView === 'policies') {
      return {
        ...baseSection,
        content: React.cloneElement(updatedContent, { onLoginSuccess: handleLocalMockLogin, isLoggedIn, onLogout: handleLogout })
      };
    }
    return { ...baseSection, content: updatedContent };
  };

  const currentSection = getCurrentSection();

  if (isLoading) {
    return (
      <div>
        <Header />
        <div>LOADING STARSHIP MANIFESTS...</div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <BackgroundEffects />
      {isCmiMode && isLoggedIn ? (
        <CmiInterface onLogout={handleLogout} />
      ) : currentSection ? (
        <UnlockedSection section={currentSection} onClose={() => setCurrentView(null)} />
      ) : (
        <div>
          <h1>SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</h1>
          <p>Select a database from the navigation panel to view records.</p>
        </div>
      )}
      <audio ref={audioRef} src="/background.mp3" loop />
      <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default App;
