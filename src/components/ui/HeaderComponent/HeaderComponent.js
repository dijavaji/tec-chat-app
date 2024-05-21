import React from 'react';
import { Link} from 'react-router-dom';
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
          <li> <Link to="/"> Home</Link></li>
          <li> <Link to="/servicios" >Servicios</Link></li>
          <li> <Link to="/clientes" >Clientes</Link></li>
          <li> <Link to="/contactos" >Contactos</Link></li>
          <li> <Link to="/login" >Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent;
