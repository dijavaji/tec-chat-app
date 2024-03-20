import React from 'react'
import { Link} from 'react-router-dom';

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
            <Link to="#"> <FaFacebook className="social-icon"/> </Link>
          </label>
          <label><Link to="#"> <FaInstagram className="social-icon"/> </Link></label>
          <label><Link to="#"> <FaSquareXTwitter className="social-icon"/> </Link></label>
          <label><Link to="#"> <FaGoogle className="social-icon"/> </Link></label>
        </div>
        <div className="copyr">
           <p>Copyright &copy; {new Date().getFullYear()} Technoloqie Asesoramiento Inform&#225;tico. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent;
