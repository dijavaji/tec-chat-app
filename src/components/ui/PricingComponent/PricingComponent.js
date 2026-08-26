import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MdCheck, MdArrowForward, MdStar } from 'react-icons/md';
import './PricingComponent.css';

const PricingComponent = () => {
  const plans = [
    {
      name: 'Plan Gratis',
      tagline: 'Ideal para empezar',
      price: '$0',
      period: '/ mes',
      features: [
        '1 Chatbot / Agente',
        'Mensajes Ilimitados',
        'Widget Web',
        'WhatsApp',
        'Telegram',
        '1 Usuario del panel',
        'Entrenamiento por lenguaje natural',
        'Soporte Community'
      ],
      buttonText: 'Comenzar gratis',
      highlighted: false,
      buttonType: 'outline'
    },
    {
      name: 'Plan Profesional',
      tagline: 'Para pymes y negocios en crecimiento',
      price: '$24.99',
      period: '/ mes',
      features: [
        '2 Chatbots / Agentes',
        'Mensajes Ilimitados',
        'Widget Web',
        'WhatsApp',
        'Telegram',
        '3 Usuarios del panel',
        'Entrenamiento por lenguaje natural',
        'Personalización avanzada',
        'Analítica predictiva',
        'Soporte prioritario'
      ],
      buttonText: 'Lo quiero',
      highlighted: true,
      badge: 'MÁS POPULAR',
      buttonType: 'primary'
    },
    {
      name: 'Plan Corporativo',
      tagline: 'Soluciones a la medida',
      price: 'Consultar',
      period: '',
      features: [
        'Chatbots Ilimitados',
        'Mensajes Ilimitados',
        'Todos los canales',
        'Implementación a medida',
        'Integraciones ERP/CRM',
        'SLA personalizado',
        'Capacitación del equipo',
        'Soporte dedicado'
      ],
      buttonText: 'Solicitar cotización',
      highlighted: false,
      buttonType: 'outline-white'
    }
  ];

  const commonFeatures = [
    'IA entrenable en lenguaje natural',
    'Dashboard de administración web',
    'Historial de conversaciones',
    'Seguridad y cifrado de datos',
    'Integración en minutos',
    'Sin límite de mensajes*',
    'Soporte técnico'
  ];

  return (
    <>
      <Helmet>
        <title>Planes Smart Chatbot — Precios desde $9.99/mes | Technoloqie</title>
        <meta name="description" content="Plan básico gratis sin límite de mensajes. Plan profesional desde $9.99/mes con 2 chatbots, WhatsApp, Telegram y analítica predictiva. Sin sorpresas. Technoloqie." />
      </Helmet>

      <section className="pricing-section">
        <div className="pricing-hero">
          <h1 className="pricing-headline">Precios transparentes. Sin letras chiquitas.</h1>
          <p className="pricing-subheadline">
            Elige el plan que encaje con tu negocio. Todos incluyen IA entrenable, integración multicanal y soporte técnico.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.badge && <div className="plan-badge"><MdStar /> {plan.badge}</div>}
              
              <div className="plan-header">
                <h2 className="plan-name">{plan.name}</h2>
                <p className="plan-tagline">{plan.tagline}</p>
                <div className="plan-price-container">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>
              </div>

              <div className="plan-features">
                <ul className="feature-list">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-item">
                      <MdCheck className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-action">
                <Link to="/register" className={`btn-pricing ${plan.buttonType}`}>
                  {plan.buttonText} {plan.buttonType === 'primary' && <MdArrowForward />}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="common-features-section">
          <h3 className="common-title">Todo plan incluye:</h3>
          <div className="common-grid">
            {commonFeatures.map((feature, index) => (
              <div key={index} className="common-item">
                <MdCheck className="check-icon-success" /> <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-cta-footer">
          <div className="cta-footer-content">
            <h4>¿No encuentras el plan perfecto para ti?</h4>
            <p>Cuéntanos lo que necesitas y te armamos una solución a tu medida.</p>
            <Link to="/contacto" className="btn-contact-footer">Contactar <MdArrowForward /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingComponent;
