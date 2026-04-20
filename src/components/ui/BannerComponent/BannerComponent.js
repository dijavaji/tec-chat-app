import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdPlayArrow } from 'react-icons/md';

import "./BannerComponent.css";

const BannerComponent = () => {
  return (
    <section className="hero-section">
      <div className="hero-neural-bg">
        <div className="neural-spot spot-1"></div>
        <div className="neural-spot spot-2"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Smart Chatbot v2.0</div>
          
          <h1 className="hero-headline">
            Tu negocio merece una atención al cliente 24/7, <span className="text-electric">inteligente</span> y sin complicaciones.
          </h1>
          
          <p className="hero-subheadline">
            Sistema Smart de Chatbot de Technoloqie — el asistente de IA que se instala en minutos en tu web, WhatsApp y Telegram. Diseñado para pymes que quieren crecer sin contratar un ejército de soporte.
          </p>
          
          <div className="hero-actions">
            <Link to="/register" className="btn-hero-primary">
              Comenzar gratis <MdArrowForward />
              <div className="btn-glow"></div>
            </Link>
            <button className="btn-hero-outline">
              <MdPlayArrow /> Ver cómo funciona
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">99%</span>
              <span className="stat-label">Precisión IA</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Disponibilidad</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-value">&lt; 5min</span>
              <span className="stat-label">Instalación</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="widget-mockup-container">
            <div className="widget-mockup">
              <div className="widget-header">
                <div className="widget-avatar">TS</div>
                <div className="widget-info">
                  <div className="widget-title">Technoloqie AI</div>
                  <div className="widget-status">En línea</div>
                </div>
              </div>
              <div className="widget-body">
                <div className="widget-msg bot">Hola 👋 soy el asistente de Technoloqie. ¿En qué puedo ayudarte?</div>
                <div className="widget-msg user">¿Cómo se integra en mi web?</div>
                <div className="widget-msg bot pulsate">Escribiendo...</div>
              </div>
            </div>
            <div className="widget-aura"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
