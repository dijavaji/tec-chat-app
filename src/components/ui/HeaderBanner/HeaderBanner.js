import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

import logoImg from "../../../assets/img/logo-smart-chatbotTiny.png";

import "./HeaderBanner.css";

const HeaderBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-banner">
      <nav aria-label="Navegación principal" className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Smart Chatbot Technoloqie — Inicio">
          <img 
            src={logoImg} 
            alt="Smart Chatbot Technoloqie" 
            width="180" 
            height="40"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="logo-fallback" style={{ display: 'none' }}>Technoloqie</span>
        </Link>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={() => setIsOpen(false)}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/servicios" activeClassName="active" onClick={() => setIsOpen(false)}>Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/precios" activeClassName="active" onClick={() => setIsOpen(false)}>Precios</NavLink>
          </li>
          <li>
            <NavLink to="/contacto" activeClassName="active" onClick={() => setIsOpen(false)}>Contacto</NavLink>
          </li>
        </ul>
        
        <div className={`nav-actions ${isOpen ? 'open' : ''}`}>
          <Link to="/login" className="btn-outline" onClick={() => setIsOpen(false)}>Iniciar Sesi&#243;n</Link>
          <Link to="/contacto?demo=1" className="btn-primary" onClick={() => setIsOpen(false)}>Solicitar Demo</Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBanner;
