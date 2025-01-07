import React from 'react';
//import { MdSupportAgent } from "react-icons/md";
import { MdAssistant, MdOutlineTextsms, MdOutlineUploadFile, MdOutlineTextSnippet} from "react-icons/md";
//import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
//import { RiRobot2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import './SidebarComponent.css';

const SidebarComponent = () => {
  return (
        <nav className="sidebar">
          <div className="logo-container">

            <span className="logo-text">Asesor Virtual Inteligente</span>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "nav-link-active" : "nav-link")} exact={true} to="/menu">
                <span className="nav-icon">
                    <MdAssistant className="" width="24" height="24"/>
                </span>
                <span className="nav-text">Menu</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "nav-link.active" : "nav-link")}  exact={true} to="/chat">
              <span className="nav-icon">
                  <MdOutlineTextsms className="" width="24" height="24"/>
              </span>
              <span className="nav-text">Chat nuevo</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "nav-link.active" : "nav-link")}  exact={true} to="/file-upload">
              <span className="nav-icon">
                  <MdOutlineUploadFile className="" width="24" height="24"/>
              </span>
              <span className="nav-text">Cargar archivo</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "nav-link.active" : "nav-link")}  exact={true} to="/intents">
              <span className="nav-icon">
                  <MdOutlineTextSnippet className="" width="24" height="24"/>
              </span>
              <span className="nav-text">Intenci&#243;n</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({isActive}) => (isActive ? "nav-link.active" : "nav-link")}  exact={true} to="/profile">
              <span className="nav-icon">
                  <FaRegUser className="" width="24" height="24"/>
              </span>
              <span className="nav-text">Perfil</span>
              </NavLink>
            </li>

          </ul>
        </nav>
  )
}

export default SidebarComponent;
