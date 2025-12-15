import React, {useEffect, useState} from 'react';

import {toast} from "react-toastify";

import userAuth from '../../hooks/useAuth'
import UserService from '../../services/user.service.js';
import { AUDIT_APP,} from "../../utils/tec-chat.constants";

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
      //setIntents(response);
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
        setTitleModal('');
        setChildrenModal(<SettingsComponent setShowModal={setShowModal} setTitleModal={setTitleModal} setChildrenModal={setChildrenModal} getUser={user}/> );
        setShowModal(true);
        break;
      default:

        break;
      }
  }

  return (
    <div className="profile">
      {user && (<><div className='profile-left'>
        <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="avatar" className="avatar-img-card"/>

      </div>
      <div>
        <HeaderProfile getUser={user} auth={auth} handlerModal={handlerModal}/>
        <div>Followers</div>
        <div className='other'>
          <p className='other-name'> {user.person.firstName} {user.person.lastName} </p>
        </div>
          {user.siteWeb && <a href={user.siteWeb} className='siteWeb' target='_blank'></a>}

      </div></>)}
      <ModalComponent isOpen={showModal} onClose={() => setShowModal(false)} title={titleModal} >
        {childrenModal}
      </ModalComponent>
    </div>
  )
}

export default ProfileComponent;
