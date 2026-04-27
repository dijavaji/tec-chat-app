import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import './FooterComponent.css';

const FooterComponent = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart Chatbot Technoloqie",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Sistema de chatbot con IA para pymes, integración multicanal",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <footer className="main-footer">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna 1: Logo y Bio */}
          <div className="footer-section bio">
            <Link to="/" className="footer-logo">
              <div className="logo-dot"></div>
              <span>Technoloqie</span>
            </Link>
            <p className="footer-description">
              Smart Chatbot — Tecnología de IA para la atención al cliente del futuro.
            </p>
            <div className="footer-social">
              <Link to="#"><FaFacebook /></Link>
              <Link to="#"><FaInstagram /></Link>
              <Link to={{ pathname: "https://x.com/Technoloqie" }} target="_blank"><FaSquareXTwitter /></Link>
              <Link to="#"><FaGoogle /></Link>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-section links">
            <h4 className="footer-title">Enlaces rápidos</h4>
            <nav className="footer-nav">
              <Link to="/">Inicio</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/precios">Precios</Link>
              <Link to="/contacto">Contacto</Link>
            </nav>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer-section contact">
            <h4 className="footer-title">Contacto</h4>
            <ul className="contact-list">
              <li>
                <a href="mailto:info@technoloqie.cloud">info@technoloqie.cloud</a>
              </li>
              <li>Quito, Ecuador</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Technoloqie. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
