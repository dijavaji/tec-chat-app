import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

import PasswordComponent from '../PasswordComponent';
import EmailComponent from '../EmailComponent';
import PersonalDataComponent from '../PersonalDataComponent';
import './SettingsComponent.css';

const SettingsComponent = (props) => {
  const {setShowModal, setTitleModal, setChildrenModal, getUser}=props;
  const {logout} = useAuth();
  const history = useHistory();

  const onChangePassword = () =>{
    setTitleModal('Cambiar contrase\u00f1a');
    setChildrenModal(<PasswordComponent currentUser={getUser.username} logout={onLogout}/>);
  }

  const onChangeEmail = () =>{
    setTitleModal('Cambiar email');
    setChildrenModal(<EmailComponent setShowModal={setShowModal} currentEmail={getUser.email}/>);
  }

  const onChangeDescription = () =>{
    setTitleModal('Cambiar datos personales');
    setChildrenModal(<PersonalDataComponent setShowModal={setShowModal} currentPerson={getUser.person}/>);
  }

  const onLogout = () =>{
    //TODO cerrar la sesion en el backend
    logout();
    history.push('/');
  }

  return (
    <div className='settings-form'>
      <button onClick={onChangePassword} >Cambiar contrase&#241;a</button>
      <button onClick={onChangeEmail} >Cambiar email</button>
      <button onClick={onChangeDescription} >Datos personales</button>
      <button onClick={onLogout} >Cerrar sesi&#243;n</button>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
    </div>
  )
}

export default SettingsComponent
