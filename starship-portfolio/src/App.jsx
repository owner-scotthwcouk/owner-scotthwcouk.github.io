import React, { useEffect, useState } from "react";
import { useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import Admin from "./Admin";
import "./App.css";

function App() {
  const { instance, accounts } = useMsal();
  const [currentSection, setCurrentSection] = useState('about');
  const [appData, setAppData] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check if user is authenticated
  const isAuthenticated = accounts.length > 0;

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
      setShowAdmin(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    instance.logoutPopup();
    setShowAdmin(false);
  };

  // If admin is shown and user is authenticated
  if (showAdmin && isAuthenticated) {
    return <Admin onLogout={handleLogout} />;
  }

    useEffect(() => {
    fetch("/data.json")
      .then(r => r.json())
      .then(setData)
      .catch(err => console.error("Failed to load data:", err));
  }, []);

  // Check if URL contains /admin
  useEffect(() => {
    if (window.location.pathname.includes("/admin")) {
      setIsAdmin(true);
    }
  }, []);

  if (isAdmin) {
    return <Admin data={data} setData={setData} />;
  }

  if (!data) return <div className="content-panel">Loading...</div>;

  return (
    <div className="main-layout">
      <header className="trek-header">
        <h1>SCOTT HARVEY-WHITTLE PORTFOLIO INTERFACE</h1>
        <StardateClock />
        <div className="uplink">UPLINK: STABLE</div>
      </header>
      <aside className="nav-panel">
        {Object.keys(data).map(key => (
          <button
            key={key}
            onClick={() => setSection(key)}
            style={{
              background: section === key ? "#32f2ff" : "",
              color: section === key ? "#1a2638" : ""
            }}
          >
            {key.replace(/_/g, " ").toUpperCase()}
          </button>
        ))}
        <button onClick={() => setIsAdmin(true)} style={{marginTop: "2em", background: "#ff6b35"}}>
          🔧 ADMIN
        </button>
      </aside>
      <main className="content-panel">
        <Section name={section} sectionData={data[section]} />
      </main>
      <audio src="/ambient.mp3" autoPlay loop />
    </div>
  );
}

function StardateClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const stardate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")} // ${now.toLocaleTimeString()}`;
  return <span className="stardate">{`STARDATE ${stardate}`}</span>;
}

function Section({ name, sectionData }) {
  if (name === "about" && typeof sectionData === "object") {
    return (
      <div>
        <h2>{sectionData.title}</h2>
        {sectionData.image && (
          <img
            src={sectionData.image}
            alt="Scott Harvey-Whittle"
            style={{ width: 128, borderRadius: "50%", marginBottom: 16 }}
          />
        )}
        <p>{sectionData.bio}</p>
        <p>{sectionData.inspiration}</p>
        <p><em>{sectionData.closing}</em></p>
      </div>
    );
  }

  if (name === "projects" && Array.isArray(sectionData)) {
    return (
      <div>
        <h2>Projects</h2>
        <div className="project-list">
          {sectionData.map((proj, idx) => (
            <div key={proj.url || idx} className="project-card">
              <div style={{color:"#0cf9fa", fontWeight:"bold"}}>
                {proj.stardate ? `Stardate ${proj.stardate}` : ""}
              </div>
              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="project-title">
                {proj.title}
              </a>
              <div>{proj.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (name === "mission_update" && Array.isArray(sectionData)) {
    return (
      <div>
        <h2>Mission Update</h2>
        {sectionData.map((m, idx) => (
          <div key={idx} style={{marginBottom:"1em",padding:"1em",background:"#111930",borderLeft:"4px solid #00ffff"}}>
            <strong>{m.stardate}</strong>
            <div style={{fontWeight:"bold", color:"#00ffff"}}>
              {m.update_title}
            </div>
            <div>{m.update_desc}</div>
          </div>
        ))}
      </div>
    );
  }

  if (name === "contact" && typeof sectionData === "object") {
    return (
      <div>
        <h2>Contact</h2>
        <ul>
          {sectionData.email && (
            <li>
              <strong>Email: </strong>
              <a href={`mailto:${sectionData.email}`}>{sectionData.email}</a>
            </li>
          )}
          {sectionData.github && (
            <li>
              <strong>GitHub: </strong>
              <a href={sectionData.github} target="_blank" rel="noopener noreferrer">
                {sectionData.github}
              </a>
            </li>
          )}
          {sectionData.linkedin && (
            <li>
              <strong>LinkedIn: </strong>
              <a href={sectionData.linkedin} target="_blank" rel="noopener noreferrer">
                {sectionData.linkedin}
              </a>
            </li>
          )}
        </ul>
      </div>
    );
  }

  if (typeof sectionData === 'string') return <div>{sectionData}</div>;
  if (Array.isArray(sectionData)) return (
    <ul>
      {sectionData.map((item, idx) => 
        <li key={idx}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
      )}
    </ul>
  );
  if (typeof sectionData === 'object') return <pre>{JSON.stringify(sectionData, null, 2)}</pre>;

  return <div>Section not found.</div>;
}

export default App;
