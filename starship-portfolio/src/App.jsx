import React, { useEffect, useState } from "react";
import { useMsal, useIsAuthenticated } from '@azure/msal-react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { loginRequest } from './authConfig';
import Admin from "./Admin";
import "./App.css";

function App() {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const [currentSection, setCurrentSection] = useState("about");
  const [appData, setAppData] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [stardate, setStardate] = useState("");

  useEffect(() => {
    // Fetch data from data.json
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAppData(data))
      .catch((error) => console.error("Failed to load app data:", error));

    // Update stardate every second
    const interval = setInterval(() => {
      const now = new Date();
      const year = now.getFullYear();
      const start = new Date(year, 0, 0);
      const diff = now - start;
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      setStardate(`${year}.${dayOfYear.toString().padStart(3, "0")}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle redirect after login
  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
      if (response) {
        setShowAdmin(true);
      }
    }).catch((error) => {
      console.error('Login error:', error);
    });
  }, [instance]);

  const handleLogin = async () => {
    try {
      // Use redirect instead of popup
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    instance.logoutRedirect();
    setShowAdmin(false);
  };

  // Show admin panel if authenticated and admin mode is active
  if (showAdmin && isAuthenticated) {
    return <Admin onLogout={handleLogout} />;
  }

  // Show loading state while data is being fetched
  if (!appData) {
    return (
      <div className="app loading">
        <div className="loading-text">LOADING STARSHIP INTERFACE...</div>
      </div>
    );
  }

  const renderSection = () => {
    const section = appData[currentSection];
    
    if (!section) return null;

    if (currentSection === "about") {
      return (
        <div className="about-section">
          <h2>{section.title}</h2>
          {section.image && <img src={section.image} alt="Profile" className="profile-image" />}
          <p>{section.bio}</p>
          <p>{section.inspiration}</p>
          <p>{section.closing}</p>
        </div>
      );
    }

    if (currentSection === "projects") {
      return (
        <div className="projects-section">
          <h2>PROJECTS</h2>
          <div className="projects-grid">
            {section.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-stardate">{project.stardate}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    VIEW PROJECT →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentSection === "mission_update") {
      return (
        <div className="mission-section">
          <h2>MISSION UPDATES</h2>
          <div className="mission-timeline">
            {section.map((update, index) => (
              <div key={index} className="mission-item">
                <div className="mission-stardate">{update.stardate}</div>
                <h3>{update.update_title}</h3>
                <p>{update.update_desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (currentSection === "contact") {
      return (
        <div className="contact-section">
          <h2>CONTACT</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">EMAIL:</span>
              <a href={`mailto:${section.email}`}>{section.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GITHUB:</span>
              <a href={section.github} target="_blank" rel="noopener noreferrer">{section.github}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LINKEDIN:</span>
              <a href={section.linkedin} target="_blank" rel="noopener noreferrer">{section.linkedin}</a>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app">
      <audio src="/ambient.mp3" autoPlay loop />
      <SpeedInsights />
      
      <header className="header">
        <div className="header-title">SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</div>
        <div className="header-info">
          <span className="stardate">STARDATE: {stardate}</span>
          <span className="status">UPLINK STATUS: ACTIVE</span>
        </div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <button
            className={`nav-button ${currentSection === "about" ? "active" : ""}`}
            onClick={() => setCurrentSection("about")}
          >
            ABOUT
          </button>
          <button
            className={`nav-button ${currentSection === "projects" ? "active" : ""}`}
            onClick={() => setCurrentSection("projects")}
          >
            PROJECTS
          </button>
          <button
            className={`nav-button ${currentSection === "mission_update" ? "active" : ""}`}
            onClick={() => setCurrentSection("mission_update")}
          >
            MISSION UPDATE
          </button>
          <button
            className={`nav-button ${currentSection === "contact" ? "active" : ""}`}
            onClick={() => setCurrentSection("contact")}
          >
            CONTACT
          </button>
          {isAuthenticated && (
            <button
              className="nav-button logout-button"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          )}
        </aside>

        <main className="content-panel">
          {renderSection()}
        </main>
                <footer className="footer-admin">
          <span className="admin-link" onClick={handleLogin} title="Admin Access">⚙</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
