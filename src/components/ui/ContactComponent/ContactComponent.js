import React from 'react';

import contactImg from "../../../assets/img/315vPGsAFUk.jpg";

const ContactComponent = () => {
  return (
    <section className="contacto">
      <div className="contacto-content">
        <h2>Contactos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
        <div className="contacto-group">
          <form action="" className="form-contact">
            <div>
              <input type="text" placeholder="Nombre" className="form-control"/>
              <input type="text" placeholder="Apellido" className="form-control"/>
              <input type="email" placeholder="Correo electronico" className="form-control"/>
              <input type="tel" placeholder="Celular" className="form-control"/>
            </div>
            <textarea rows="5" className="form-control" placeholder="Mensaje"></textarea>
            <input type="submit" className="send-btn" value="Enviar"/>

          </form>
          <div className="contacto-img">
            <img className="" src={contactImg} alt="contactoimg"/>
          </div>
        </div>

      </div>

    </section>
  )
}

export default ContactComponent;
