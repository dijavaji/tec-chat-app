import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-content" >
        <div className="social">
          <label>
            <a href="#"> <FaFacebook className="social-icon"/> </a>
          </label>
          <label><a href="#"> <FaInstagram className="social-icon"/> </a></label>
          <label><a href="#"> <FaSquareXTwitter className="social-icon"/> </a></label>
          <label><a href="#"> <FaGoogle className="social-icon"/> </a></label>
        </div>
        <div className="copyr">
           <p>Copyright &copy; 2023 Technoloqie Asesoramiento Inform&#225;tico. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;
