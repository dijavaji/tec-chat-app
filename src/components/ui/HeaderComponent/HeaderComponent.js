import React from 'react';
import { FaBars } from "react-icons/fa";

import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <header>
      <nav className="navbar-menu">
        <input type="checkbox" name="check" id="check"/>
        <label htmlFor="check" className="checkbtn" >
          <FaBars className="" />
        </label>
        <label className="logo">Technoloqie</label>
        <ul className="nav-options">
          <li> <a href="#" >Home</a></li>
          <li> <a href="#nosotros" >Servicios</a></li>
          <li> <a href="#" >Clientes</a></li>
          <li> <a href="#" >Contactos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent;
