import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

import PasswordComponent from '../PasswordComponent';
import './SettingsComponent.css';

const SettingsComponent = (props) => {
  const {setShowModal, setTitleModal, setChildrenModal}=props;
  const {logout} = useAuth();
  const history = useHistory();

  const onChangePassword = () =>{
    setTitleModal('Cambiar contrase\u00f1a');
    setChildrenModal(<PasswordComponent/>);
  }

  const onLogout = () =>{
    //TODO cerrar la sesion en el backend
    logout();
    history.push('/');
  }

  return (
    <div className='settings-form'>
      <button onClick={onChangePassword}>Cambiar contrase&#241;a</button>
      <button>Cambiar email</button>
      <button>Descripci&#243;n</button>
      <button onClick={onLogout} >Cerrar sesi&#243;n</button>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
    </div>
  )
}

export default SettingsComponent
