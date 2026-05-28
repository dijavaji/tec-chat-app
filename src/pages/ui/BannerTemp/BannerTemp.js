import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaRobot, FaLink , FaTelegramPlane} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import "./BannerTemp.css";
import logoImg from "../../../assets/img/logo-smart-chat-blank.png";

const BannerTemp = () => {
  return (
    <div className="banner-temp-container">
      {/* SECTION 1: HEADER / HERO */}
      <header className="landing-header container">
        
        <Link to="/" className="logo-container" aria-label="Smart Chatbot Technoloqie — Inicio">
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

        <a href="https://github.com/dijavaji" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub />
        </a>
      </header>

      <section className="hero section-padding">
        <div className="container">
          <span className="badge-hackathon">🎯 HackIAthon 2026 - Reto 3</span>
          <h1>SMART CHATBOT PARA SEGUROS</h1>
          <h2>Con Inteligencia Artificial</h2>
          <p>
            Transformá la atención al cliente de tu aseguradora con IA que entiende lenguaje natural.
          </p>
          <a href="#demo" className="btn-primary">PROBAR DEMO</a>
        </div>
      </section>

      {/* SECTION 2: PROBLEMA / SOLUCIÓN */}
      <section className="problem-solution section-padding">
        <div className="container">
          <div className="ps-grid">
            <div className="ps-card">
              <h3>❌ EL PROBLEMA</h3>
              <ul>
                <li>Los pacientes no saben cuánto pagarán antes de atenderse</li>
                <li>Call centers colapsados con preguntas repetitivas</li>
                <li>Insatisfacción por costos sorpresa en facturas</li>
              </ul>
            </div>
            <div className="ps-card">
              <h3>✅ LA SOLUCIÓN</h3>
              <ul>
                <li>Smart Chatbot calcula el copago EXACTO antes de la atención</li>
                <li>80% de consultas se auto-resuelven con IA</li>
                <li>Transparencia total = más confianza del cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WIDGET DE CHAT EMBEBIDO */}
      <section id="demo" className="demo-section section-padding">
        <div className="container">
            <h1>Prueba la demo en vivo</h1>
            <h3>WIDGET DE CHAT FLOTANTE <br/> EN LA ESQUINA INFERIOR DERECHA &#62; &#62; &#62; &#62;</h3>
            <div className="demo-examples">
            
            <h4>Ejemplos para probar:</h4>
            <ul>
              <li>• "Tuve un accidente de tránsito grave. Me van a operar de la pierna en el Hospital Metropolitano de Quito"</li>
              <li>• "Tengo un dolor abdominal muy fuerte desde ayer y me siento con náuseas. Estoy en Quito y tengo Seguro"</li>
              <li>• "Mi hijo tiene fiebre alta y tengo un seguro medico con ustedes"</li>
            </ul>
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
        
          
          <p className="telegram-link">
            Pruebalo en Telegram: 
            <a href="https://t.me/tec_hackaton_devbot" target="_blank" rel="noopener noreferrer"> @tec_hackaton_devbot</a>
          </p>
        </div>
      </section>

      {/* SECTION 4: TECNOLOGÍA */}
      <section className="tech-section section-padding">
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>TECNOLOGÍA QUE LO HACE POSIBLE</h3>
          <div className="tech-grid">
            <div className="tech-card">
              <span className="icon">🧠</span>
              <h4>LLM Licencias Open Source</h4>
              <p>Clasifica síntomas con agentes IA</p>
            </div>
            <div className="tech-card">
              <span className="icon">📚</span>
              <h4>RAG con MongoDB</h4>
              <p>Extrae datos de PDFs de aseguradoras</p>
            </div>
            <div className="tech-card">
              <span className="icon">⚙️</span>
              <h4>Microservicios Java/Python</h4>
              <p>Backend escalable y robusto</p>
            </div>
            <div className="tech-card">
              <span className="icon">💾</span>
              <h4>MySQL + Docker</h4>
              <p>Deploy en cloud con contenedores</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CARACTERÍSTICAS ENTERPRISE */}
      <section className="">
        <div className="container">
          <h3>CARACTERÍSTICAS ENTERPRISE</h3>
          <p>Smart Chatbot incluye funcionalidades avanzadas para producción:</p>
          <div className="feature-grid">
            <div className="feature">
              <span className="icon">🔐</span>
              <h4>Autenticación Segura</h4>
              <p>JWT + OAuth2 para control de acceso de usuarios</p>
            </div>
            <div className="feature">
              <span className="icon">📚</span>
              <h4>Entrenamiento Continuo</h4>
              <p>Cargá nuevos PDFs y tu chatbot aprende periódicamente</p>
            </div>
            <div className="feature">
              <span className="icon">📱</span>
              <h4>Multi-Canal</h4>
              <p>Web, Telegram, WhatsApp (API ready) y redes sociales</p>
            </div>
            <div className="feature">
              <span className="icon">⚡</span>
              <h4>Integración en 5 Minutos</h4>
              <p>Un script, sin código complejo, sin migraciones</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HACKIATHON + SPONSORS */}
      <section className="hackathon-info section-padding">
        <div className="container">
          <p className="reto-title">"Estimador Agéntico de Copago y Cobertura para el Paciente"</p>

          <a href="https://doras.to/technoloqie" target="_blank" rel="noopener noreferrer" className="btn-github">
            <FaLink /> Ver contactos
          </a>
        </div>
      </section>

      {/* SECTION 7: FOOTER */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h4>Technoloqie</h4>
              <p>Asesoramiento Informático</p>
            </div>
            <div className="contact" style={{alignContent: 'end', textAlign: 'end'}}>
              <Link to={{ pathname: "https://x.com/Technoloqie" }} target="_blank" > <FaSquareXTwitter /> </Link>
              <Link to={{ pathname: "https://www.linkedin.com/in/dijavaji" }} target="_blank" > <FaLinkedin/> </Link>
              <Link to={{ pathname: "https://t.me/tec_hackaton_devbot" }} target="_blank" > <FaTelegramPlane/> </Link>
            </div>
          </div>
          <p className="copyright">© 2026 Technoloqie. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BannerTemp;
