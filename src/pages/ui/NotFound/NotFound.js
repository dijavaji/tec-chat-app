import React from 'react';
import { Link } from 'react-router-dom';

import "./NotFound.css"

const NotFound = () => (
  <div className="container">
       <h1 className="error-code">404</h1>
       <p className="error-message">¡Ups! No encontramos la página que buscabas.</p>
       <Link to="/" className="home-button">Volver a la página principal</Link>
  </div>

);

export default NotFound;
