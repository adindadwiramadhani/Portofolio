import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import komponen kamu sesuai struktur folder
import AppNavbar from './components/navbar'; 
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // --- LOGIKA LOADING ANIMATION ---
  useEffect(() => {
    // Inject Bootstrap CSS (Opsional jika sudah ada di index.html)
    const linkCSS = document.createElement("link");
    linkCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    linkCSS.rel = "stylesheet";
    document.head.appendChild(linkCSS);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(script);

    // Set background body agar tidak putih saat loading
    document.body.style.backgroundColor = "#0d1117"; 
    document.body.style.color = "#ffffff";
    document.body.style.margin = "0";

    // Timer Loading selama 2.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      // Cleanup (jangan hapus link CSS agar style bootstrap tetap ada)
      clearTimeout(timer);
    };
  }, []);

  // Style untuk Loading Screen
  const styles = {
    loaderContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#0d1117', // Sesuaikan dengan warna bg utama
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      flexDirection: 'column'
    }
  };

  // --- TAMPILAN SAAT LOADING (MUTER MANTUL) ---
  if (isLoading) {
    return (
      <div style={styles.loaderContainer}>
        <style>
          {`
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
            .bounce-wrapper { animation: bounce 1s ease-in-out infinite; }
            .spinner {
              width: 60px; height: 60px;
              border: 5px solid rgba(121, 80, 242, 0.3);
              border-top: 5px solid #f783ac;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
              box-shadow: 0 0 15px rgba(247, 131, 172, 0.5);
            }
          `}
        </style>
        <div className="bounce-wrapper">
          <div className="spinner"></div>
        </div>
        <h5 className="mt-4 text-white fw-light" style={{ letterSpacing: '2px', opacity: 0.8 }}>LOADING...</h5>
      </div>
    );
  }

  // --- TAMPILAN UTAMA (ROUTER) ---
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#0d1117' }}>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}