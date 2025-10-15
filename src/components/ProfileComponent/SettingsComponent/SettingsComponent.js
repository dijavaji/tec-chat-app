import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

import './SettingsComponent.css';

const SettingsComponent = (props) => {
  const {setShowModal}=props;
  const {logout} = useAuth();
  const history = useHistory();

  const onLogout = () =>{
    //TODO cerrar la sesion en el backend
    logout();
    history.push('/');
  }

  return (
    <div className='settings-form'>
      <button>Cambiar contrase&#241;a</button>
      <button>Cambiar email</button>
      <button>Descripci&#243;n</button>
      <button onClick={onLogout} >Cerrar sesi&#243;n</button>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
    </div>
  )
}

export default SettingsComponent
