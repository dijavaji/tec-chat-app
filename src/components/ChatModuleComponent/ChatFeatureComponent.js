import React from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";

import './ChatFeatureComponent.css';

const ChatFeatureComponent = () => {

  return (
    <div className="chat-features">
      <div className="feature-column">
        <MdOutlineWbSunny className="feature-icon" />
        <h3>Examples</h3>
        <div className="feature-card">"Explica computación cuántica en términos simples" →</div>
        <div className="feature-card">"¿Tienes ideas creativas para el cumpleaños de un niño?" →</div>
        <div className="feature-card">"¿Cómo hago una petición HTTP en JavaScript?" →</div>
      </div>
      <div className="feature-column">
        <BsLightning className="feature-icon" />
        <h3>Capabilities</h3>
        <div className="feature-card">Recuerda lo que el usuario dijo antes en la conversación</div>
        <div className="feature-card">Permite correcciones de seguimiento</div>
        <div className="feature-card">Entrenado para declinar solicitudes inapropiadas</div>
      </div>
      <div className="feature-column">
        <IoWarningOutline className="feature-icon" />
        <h3>Limitations</h3>
        <div className="feature-card">Puede ocasionalmente generar información incorrecta</div>
        <div className="feature-card">Puede producir instrucciones dañinas o contenido parcial</div>
        <div className="feature-card">Conocimiento limitado del mundo posterior a 2021</div>
      </div>
    </div>
  );
};

export default ChatFeatureComponent;