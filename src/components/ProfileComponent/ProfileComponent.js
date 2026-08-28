import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {toast} from "react-toastify";
import { 
  IoLocationOutline, 
  IoCalendarOutline, 
  IoMaleFemaleOutline, 
  IoCardOutline, 
  IoCallOutline,
  IoMailOutline
} from "react-icons/io5";

import userAuth from '../../hooks/useAuth'
import UserService from '../../services/user.service.js';

import HeaderProfile from './HeaderProfile';
import SettingsComponent from './SettingsComponent';
import ModalComponent from '../ui/ModalComponent';
import "./ProfileComponent.css";

const ProfileComponent = (props) => {
  const {username} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const {auth} = userAuth();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [childrenModal, setChildrenModal] = useState(null);

  useEffect(() => {
      getProfile();
  }, []);

  const getProfile = async () => {
    setIsLoading(true);
    try{
      const response = await UserService.getUser('',username);
      setUser(response.data);
      setIsLoading(false);
    }catch(e){
        toast.error(e.message);
    }
  }

  if(isLoading) return null;

  const handlerModal = (type, data) =>{
    switch (type){
      case 'avatar':
        setTitleModal('Cambiar foto de perfil');
        setChildrenModal(<div>avatar</div>);
        setShowModal(true);
        break;
      case 'settings':
        setTitleModal('Configuración');
        setChildrenModal(<SettingsComponent setShowModal={setShowModal} setTitleModal={setTitleModal} setChildrenModal={setChildrenModal} getUser={user}/> );
        setShowModal(true);
        break;
      default:
        break;
      }
  }

  return (
    <div className="profile">
      {user && (
        <>
          <div className='profile-left'>
            <img 
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" 
              alt="avatar" 
              className="avatar-img-card"
              onClick={() => handlerModal('avatar')}
            />
          </div>
          <div className="profile-content">
            <HeaderProfile getUser={user} auth={auth} handlerModal={handlerModal}/>
            
            <div className='other'>
              <p className='other-name'> {user.person.firstName} {user.person.lastName} </p>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">10</span>
                <span>Cr&#233;ditos gratis</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span>Cr&#233;ditos disponibles</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="detail-item">
                <IoMailOutline className="detail-icon" />
                <div className="detail-info">
                  <span className="detail-label">Email</span>
                  <span className="detail-text">{user.email}</span>
                </div>
              </div>

              {user.person.phone && (
                <div className="detail-item">
                  <IoCallOutline className="detail-icon" />
                  <div className="detail-info">
                    <span className="detail-label">Teléfono</span>
                    <span className="detail-text">{user.person.phone}</span>
                  </div>
                </div>
              )}

              {user.person.idn && (
                <div className="detail-item">
                  <IoCardOutline className="detail-icon" />
                  <div className="detail-info">
                    <span className="detail-label">Identificación</span>
                    <span className="detail-text">{user.person.idn}</span>
                  </div>
                </div>
              )}

              {user.person.address && (
                <div className="detail-item">
                  <IoLocationOutline className="detail-icon" />
                  <div className="detail-info">
                    <span className="detail-label">Dirección</span>
                    <span className="detail-text">{user.person.address}</span>
                  </div>
                </div>
              )}

              {user.person.birthDate && (
                <div className="detail-item">
                  <IoCalendarOutline className="detail-icon" />
                  <div className="detail-info">
                    <span className="detail-label">Fecha de Nacimiento</span>
                    <span className="detail-text">{moment(user.person.birthDate).format('DD/MM/YYYY')}</span>
                  </div>
                </div>
              )}

              {user.person.gender && (
                <div className="detail-item">
                  <IoMaleFemaleOutline className="detail-icon" />
                  <div className="detail-info">
                    <span className="detail-label">Género</span>
                    <span className="detail-text">{user.person.gender === 'M' ? 'Masculino' : 'Femenino'}</span>
                  </div>
                </div>
              )}
            </div>

            {user.siteWeb && (
              <a href={user.siteWeb} className='siteWeb' target='_blank' rel="noopener noreferrer">
                {user.siteWeb}
              </a>
            )}
          </div>
        </>
      )}
      <ModalComponent isOpen={showModal} onClose={() => setShowModal(false)} title={titleModal} >
        {childrenModal}
      </ModalComponent>
    </div>
  )
}

export default ProfileComponent;
