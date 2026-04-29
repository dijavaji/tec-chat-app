import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { MdAssistant, MdOutlineTextsms, MdOutlineUploadFile, MdOutlineTextSnippet } from "react-icons/md";
import { FaLink } from 'react-icons/fa';

import useAuth from "../../../hooks/useAuth";
import { SUPER_USER_ROL } from "../../../utils/tec-chat.constants";

import './SidebarComponent.css';

const SidebarComponent = () => {
  const { auth, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <aside className="sidebar">
      <div>
        <Link to="/menu" className="logo">
          <div className="logo-dot"></div>
          <span>Technoloqie</span>
        </Link>

        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/menu">
                <span className="nav-icon"><MdAssistant /></span>
                <span className="nav-text">Menú</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/chat">
                <span className="nav-icon"><MdOutlineTextsms /></span>
                <span className="nav-text">Chat nuevo</span>
              </NavLink>
            </li>

            {auth.roles === SUPER_USER_ROL && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/file-upload">
                    <span className="nav-icon"><MdOutlineUploadFile /></span>
                    <span className="nav-text">Cargar archivo</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/intents">
                    <span className="nav-icon"><MdOutlineTextSnippet /></span>
                    <span className="nav-text">Intención</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" exact to="/url-upload">
                    <span className="nav-icon"><FaLink /></span>
                    <span className="nav-text">Agregar ruta</span>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="btn-primary-action">+ Nuevo Bot</button>
        
        <div className="profile-nav-container">
          <button className="profile-button-trigger" onClick={handleClick}>
            <div className="profile-avatar">
              {auth.username ? auth.username.charAt(0).toUpperCase() : 'U'}
            </div>
            <span className="profile-name">Mi perfil</span>
          </button>
          
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/menu">Home</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={`/user/${auth.username}`}>Perfil</MenuItem>
            <MenuItem onClick={logout}>Cerrar sesión</MenuItem>
          </Menu>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
