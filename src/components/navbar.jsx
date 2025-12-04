import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" style={{ backgroundColor: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <span style={{ color: "#7950f2" }}>Adinda</span>Dev
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu Tengah */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link px-3 small text-uppercase fw-semibold" to="/">Home</Link></li>
            {/* <li className="nav-item"><Link className="nav-link px-3 small text-uppercase fw-semibold" to="/projects">Projects</Link></li> */}
            <li className="nav-item"><Link className="nav-link px-3 small text-uppercase fw-semibold" to="/certificates">Certificates</Link></li>
            <li className="nav-item"><Link className="nav-link px-3 small text-uppercase fw-semibold" to="/contact">Contact</Link></li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;