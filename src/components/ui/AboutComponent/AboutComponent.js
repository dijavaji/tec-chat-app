import React from 'react';
import { 
  MdPsychology, 
  MdDns, 
  MdStorage, 
  MdCheckCircle, 
  MdSecurity 
} from 'react-icons/md';

import './AboutComponent.css';

const AboutComponent = () => {
  return (
    <section className="services-section" id="servicios">
      {/* 2.1 HERO DE SERVICIOS */}
      <div className="services-hero">
        <h2 className="services-headline">Tecnología de IA que habla el idioma de tu negocio.</h2>
        <p className="services-subheadline">
          Detrás de cada respuesta hay una arquitectura inteligente, entrenable y escalable. Así funciona Smart Chatbot por dentro.
        </p>
      </div>

      {/* 2.2 ARQUITECTURA — VISIÓN GENERAL */}
      <div className="architecture-overview">
        <div className="architecture-container">
          <div className="architecture-text">
            <h3 className="section-title">Microservicios. Escalables. Preparados para crecer contigo.</h3>
            <p className="section-copy">
              Smart Chatbot no es un chatbot cualquiera. Está construido sobre una arquitectura de microservicios que separa cada función —desde la inteligencia artificial hasta la base de datos— en componentes independientes. Esto significa que tu chatbot puede escalar sin límites, integrarse con cualquier sistema y mantenerse estable incluso cuando cientos de usuarios conversan al mismo tiempo.
            </p>
          </div>
          
          {/* 2.3 PILAR TECNOLÓGICO */}
          <div className="tech-pillars-grid">
            <div className="tech-card">
              <div className="tech-icon-container">
                <MdPsychology className="tech-icon" />
              </div>
              <h4 className="tech-title">Inteligencia Artificial</h4>
              <p className="tech-description">
                El núcleo del chatbot usa redes neuronales basadas en transformers para entender y generar respuestas contextualmente relevantes. Entrenado con TensorFlow y PyTorch.
              </p>
            </div>

            <div className="tech-card">
              <div className="tech-icon-container">
                <MdDns className="tech-icon" />
              </div>
              <h4 className="tech-title">Backend Robusto</h4>
              <p className="tech-description">
                Java con Spring Framework gestiona la lógica de negocio, la comunicación con bases de datos y las integraciones externas. Escalable, seguro y modular.
              </p>
            </div>

            <div className="tech-card">
              <div className="tech-icon-container">
                <MdStorage className="tech-icon" />
              </div>
              <h4 className="tech-title">Datos Inteligentes</h4>
              <p className="tech-description">
                Combinamos MySQL para datos estructurados con MongoDB como base vectorial para RAG. Esto permite que tu chatbot responda con precisión quirúrgica.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2.4 MULTICANAL */}
      <div className="multichannel-section">
        <div className="multichannel-container">
          <h3 className="section-title text-center">Un solo chatbot. Todos tus canales.</h3>
          <p className="section-copy text-center">Conecta con tus clientes donde ellos estén:</p>
          
          <div className="channels-grid">
            {[
              { name: 'Widget Web', status: 'Disponible' },
              { name: 'WhatsApp', status: 'Disponible' },
              { name: 'Telegram', status: 'Disponible' },
              { name: 'Web móvil (responsive)', status: 'Disponible' },
              { name: 'CMS (WordPress, etc.)', status: 'Disponible' }
            ].map((channel, index) => (
              <div key={index} className="channel-item">
                <span className="channel-name">{channel.name}</span>
                <span className="channel-status">
                  <MdCheckCircle className="status-icon" /> {channel.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2.5 SEGURIDAD Y CONTROL */}
      <div className="security-section">
        <div className="security-container">
          <div className="security-content">
            <div className="security-badge">
              <MdSecurity /> Seguridad Grado Empresarial
            </div>
            <h3 className="section-title">Tus datos, bajo tu control.</h3>
            <p className="section-copy">
              Cada conversación, cada dato de cliente, cada entrenamiento queda almacenado de forma segura. Controla quién accede, qué información se guarda y cómo se usa. Cumplimos con estándares de seguridad para que tú duermas tranquilo.
            </p>
          </div>
          <div className="security-visual">
            <div className="shield-hex">
              <div className="hex-inner">
                <MdSecurity size={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
