import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import { MdSupportAgent } from "react-icons/md";
import { MdAssistant, MdOutlineTextsms, MdOutlineUploadFile, MdOutlineTextSnippet} from "react-icons/md";
import { FaLink } from 'react-icons/fa';
import {SUPER_USER_ROL} from "../../../utils/tec-chat.constants";
//import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
//import { RiRobot2Line } from "react-icons/ri";
//import {RiLogoutCircleRLine} from 'react-icons/ri';
import {NavLink, Link} from 'react-router-dom';
import './SidebarComponent.css';
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles({

    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      background: 'white',
      transition: 'all var(--transition-speed)',
      textDecoration: 'none',
      color: 'var(--text-color)',
      textTransform: 'none',
        },
     });

const SidebarComponent = () => {
  const {auth, logout} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

            {auth.roles === SUPER_USER_ROL && <div>
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
              <NavLink className={({isActive}) => (isActive ? "nav-link.active" : "nav-link")}  exact={true} to="/url-upload">
              <span className="nav-icon">
                  <FaLink className="" width="24" height="24"/>
              </span>
              <span className="nav-text">Agregar ruta</span>
              </NavLink>
            </li>
            </div>}

          </ul>
          <nav className="logout-nav">
           <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.root} onClick={handleClick}>
              <div className="profile-icon">{auth.username.charAt(0).toUpperCase()}</div>
              <span className="nav-text">Mi perfil</span>
           </Button>
           <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose} component={Link} to='/profile' >Perfil</MenuItem>
            <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
            <MenuItem onClick={logout}>Cerrar sesi&#243;n</MenuItem>
          </Menu>
         </nav>
        </nav>
  )
}

export default SidebarComponent;
