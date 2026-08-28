import React from 'react';
import copy from "copy-to-clipboard";


import { NavLink, Link, useHistory } from 'react-router-dom';
import { Menu, MenuItem, Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { MdOutlineDashboard, MdOutlineTextsms, MdOutlineUploadFile, MdOutlineTextSnippet, MdExpandMore } from "react-icons/md";
import { RiAiGenerate2, RiChatAi4Line, RiFileCopyLine} from "react-icons/ri";
import { FaLink } from 'react-icons/fa';
import { IoHomeOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import { toast } from 'react-toastify';

import { truncateDots } from '../../../utils/tec-chat.util';

import useAuth from "../../../hooks/useAuth";
import { SUPER_USER_ROL } from "../../../utils/tec-chat.constants";

import './SidebarComponent.css';

const SidebarComponent = () => {
  const { auth, logout } = useAuth();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const [copyText, setCopyText] = React.useState("<div id='chat-widget-container'></div>");


  const mockAgents = [
    { id: 1, name: 'Agente de Ventas', path: '/agents/sales' },
    { id: 2, name: 'Agente de Soporte', path: '/agents/support' },
    { id: 3, name: 'Agente de Marketing', path: '/agents/marketing' },
  ];

  const mockRecents = [
    { id: 1, name: 'Conversación con Cliente A', path: '/chat/123' },
    { id: 2, name: 'Conversación con Cliente B', path: '/chat/456' },
    { id: 3, name: 'Conversación con Cliente C', path: '/chat/789' },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyText = (e) => {
    setCopyText(e.target.value);
  }
  const copyToClipboard = () => {
    if (!copyText) return;
    copy(copyText);
    toast.success("Componente copiado al portapapeles, instalar en su web");
  }


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
                <span className="nav-icon"><MdOutlineDashboard /></span>
                <span className="nav-text">Tablero</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/agents">
                <span className="nav-icon"><RiAiGenerate2 /></span>
                <span className="nav-text">Agentes</span>
              </NavLink>
            </li>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="sidebar-accordion">
              <AccordionSummary
                expandIcon={<MdExpandMore />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <ListItemIcon>
                  <RiChatAi4Line className="nav-icon" />
                </ListItemIcon>
                <Typography className="nav-text">Recientes</Typography>
              </AccordionSummary>
              <AccordionDetails className="sidebar-accordion-details">
                <List component="div" disablePadding>
                  {mockRecents.map((recent) => (
                    <ListItem button key={recent.id} component={NavLink} to={recent.path} activeClassName="active">
                      <ListItemText primary={truncateDots(recent.name, 16)} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>

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

            <li className="nav-item">
              <div className="affiliate-link-container">
                <input id="copyLink" type="text" name="copyLink" value={copyText} onChange={handleCopyText}
                  className="affiliate-link-input" readOnly placeholder="Enlace de afiliado" />
                <button className="affiliate-link-button" onClick={copyToClipboard} type="button" aria-label="Copiar link" >
                  <RiFileCopyLine />
                </button>
              </div>
            </li>

          </ul>
        </nav>
      </div>

      <div className="sidebar-footer">
        <button className="btn-primary-action" onClick={() => history.push('/chat')}>Chat Nuevo</button>
        
        <div className="profile-nav-container">
          <button className="profile-button-trigger" onClick={handleClick}>
            <div className="profile-avatar">
              {auth?.username ? auth.username.substring(0, 2).toUpperCase() : 'TS'}
            </div>
            <span className="profile-name">Ajustes</span>
          </button>
          
          <Menu
            id="profile-menu"
            className="profile-menu-dropdown"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/menu">
              <IoHomeOutline style={{ marginRight: '12px', fontSize: '1.1rem' }} />
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={`/user/${auth.username}`}>
              <IoPersonOutline style={{ marginRight: '12px', fontSize: '1.1rem' }} />
              Perfil
            </MenuItem>
            <MenuItem onClick={logout} className="logout-item">
              <IoLogOutOutline style={{ marginRight: '12px', fontSize: '1.1rem' }} />
              Cerrar sesión
            </MenuItem>
          </Menu>
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
