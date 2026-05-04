import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MdArrowForward, MdPlayArrow, MdTimer, MdFlashOn, MdPsychology } from 'react-icons/md';

import "./BannerComponent.css";

const BannerComponent = () => {
  return (
    <>
      <Helmet>
        <title>Smart Chatbot con IA para Pymes — Technoloqie Ecuador</title>
        <meta name="description" content="Sistema Smart de Chatbot con Inteligencia Artificial para tu negocio. Widget web, WhatsApp y Telegram. Instalación en minutos. Plan gratis disponible. Technoloqie Ecuador." />
      </Helmet>
      
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

      {/* SECCIÓN BENEFICIOS */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-title text-center">¿Por qué elegir Smart Chatbot?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><MdTimer /></div>
              <h3>Disponibilidad Total</h3>
              <p>Tu cliente pregunta, tu chatbot responde. Sin horarios, sin colas, sin esperas. 24 horas al día, los 7 días de la semana.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><MdFlashOn /></div>
              <h3>Integración en Minutos</h3>
              <p>Funciona como widget en tu web existente, y se conecta con WhatsApp y Telegram al instante. Sin código complejo.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><MdPsychology /></div>
              <h3>IA que Aprende de Ti</h3>
              <p>Entrena tu chatbot en lenguaje natural. Cada conversación lo hace más inteligente. Respuestas precisas, clientes felices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO DEL WIDGET */}
      <section className="demo-section">
        <div className="demo-container text-center">
          <h2 className="section-title">Pruébalo ahora. Sin registro, sin compromiso.</h2>
          <p className="section-copy">Así es como se ve Smart Chatbot funcionando en tiempo real. Escribe algo 👇</p>
          <div className="demo-hint">
            <p className="mt-4">¿Ves qué fácil? En menos de 5 minutos puedes tenerlo en tu web.</p>
            <Link to="/register" className="btn-hero-primary inline-flex mt-4">
              Comenzar gratis <MdArrowForward />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerComponent;
