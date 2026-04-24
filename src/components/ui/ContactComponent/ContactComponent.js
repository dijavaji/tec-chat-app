import React from 'react';
import { MdEmail, MdPhone, MdLocationOn, MdSend } from 'react-icons/md';

import "./ContactComponent.css";

const ContactComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end only as requested by CMO
    window.location.href = "mailto:info@technoloqie.cloud";
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-hero">
        <h2 className="contact-headline">Hablemos de lo que tu negocio necesita.</h2>
        <p className="contact-subheadline">
          ¿Tienes dudas? ¿Quieres una demo personalizada? ¿Necesitas una cotización corporativa? Estamos aquí para ayudarte.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          {/* 4.2 FORMULARIO DE CONTACTO */}
          <div className="contact-form-card">
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Tu nombre" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="empresa">Empresa (Opcional)</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    placeholder="Nombre de tu empresa" 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="ejemplo@correo.com" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono (Opcional)</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    placeholder="+593 ..." 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="consulta">Tipo de consulta</label>
                <select id="consulta" required>
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="demo">Quiero una demo</option>
                  <option value="cotizacion">Cotización corporativa</option>
                  <option value="soporte">Soporte técnico</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea 
                  id="mensaje" 
                  rows="4" 
                  placeholder="¿Cómo podemos ayudarte?" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-contact-submit">
                Enviar mensaje <MdSend />
              </button>
            </form>
          </div>

          {/* 4.3 INFORMACIÓN DE CONTACTO */}
          <div className="contact-info-panel">
            <h3 className="info-title">Información de contacto</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <MdEmail />
              </div>
              <div className="info-text">
                <span className="info-label">Correo</span>
                <a href="mailto:info@technoloqie.cloud">info@technoloqie.cloud</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MdPhone />
              </div>
              <div className="info-text">
                <span className="info-label">Teléfono</span>
                <a href="tel:+593995833440">+593 99 583 3440</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MdLocationOn />
              </div>
              <div className="info-text">
                <span className="info-label">Ubicación</span>
                <span>Quito, Ecuador</span>
              </div>
            </div>

            <div className="contact-map-placeholder">
              <div className="map-overlay">
                <span>Ecuador Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
