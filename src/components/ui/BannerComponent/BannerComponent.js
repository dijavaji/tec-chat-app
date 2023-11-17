import React from 'react';

import "./BannerComponent.css";

import contactImg from "../../../assets/img/315vPGsAFUk.jpg";

const BannerComponent = () => {
  return (
    <main>
      <section className="banner">
        <div className="banner-content">
          <img src="https://source.unsplash.com/random" alt="img-banner"/>
          <div className="banner-text">
            <h2>Live Design</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
            <a href="#">Leer mas</a>
          </div>

        </div>

      </section>
      <section className="about" id="nosotros">
      <div className="about-content">
        <h2>Nuestros trabajos</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vestibulum orci a sapien imperdiet maximus.
            Nullam vestibulum orci a sapien imperdiet maximus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.q1</p>
        <div className="about-img">
          <div className="about-imgx">
            <img className="img-job" alt="comment" src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667041.jpg?w=900&t=st=1700191068~exp=1700191668~hmac=b399d87c223591c28b61f9f5889c4ee271b06c9d150ad1ec8e7f73c147e46a2f" />
            <h4>Store and sync</h4>
          </div>
          <div className="about-imgx">
            <img className="img-job" alt="share" src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9" />
            <h4>Share</h4>
          </div>
          <div className="about-imgx">
            <img className="img-job" alt="shield" src="https://img.freepik.com/free-photo/female-speaker-giving-presentation-hall-university-workshop-audience-conference-hall_155003-27432.jpg?w=900&t=st=1700191220~exp=1700191820~hmac=6c312234703ec209e8032dad2cbdd2019acfa3c0a2feaeff6207c9b588091323" />
            <h4>Stay secure</h4>
          </div>
        </div>
      </div>

      </section>

      <section className="testimonio">
        <div className="testimonio-content">
          <h2>Clientes</h2>
          <p>Nuestros clientes nos respaldan.</p>
          <div className="testimonio-group" >
            <div className="testimonio-card" >
              <img className="img-perfil" src="https://img.freepik.com/premium-photo/happy-young-male-gamer-headset-casual-makes-streaming-game_245974-8020.jpg" alt="imagenperfil"/>
              <h4>Marcos Kent</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
            </div>
            <div className="testimonio-card" >
              <img className="img-perfil" src="https://img.freepik.com/free-photo/business-concept-excited-handsome-businessman-celebration-success-isolated-white_1258-80277.jpg?w=900&t=st=1700192385~exp=1700192985~hmac=5d4c3ea00b04137ddb8f88fa17929fc1b2eeba5e8c4d47a7faca7526f4967ad1" alt="imagenperfil"/>
              <h4>Jhon Stone</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
            </div>
            <div className="testimonio-card" >
              <img className="img-perfil" src="https://img.freepik.com/premium-photo/young-asian-pretty-woman-pro-gamer-have-live-streaming-singing-chatting-with-her-fans-home_33799-19549.jpg" alt="imagenperfil"/>
              <h4>Laura Young</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vestibulum orci a sapien imperdiet maximus.</p>
            </div>
          </div>

        </div>
      </section >

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
    </main>
  )
}

export default BannerComponent;
