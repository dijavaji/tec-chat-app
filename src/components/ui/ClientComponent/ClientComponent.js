import React from 'react';

import './ClientComponent.css';

const ClientComponent = () => {
  return (
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
  )
}

export default ClientComponent;
