import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";
import { IoKeyOutline, IoMailOutline, IoPersonOutline, IoLogOutOutline } from "react-icons/io5";
import PasswordComponent from '../PasswordComponent';
import EmailComponent from '../EmailComponent';
import PersonalDataComponent from '../PersonalDataComponent';
import './SettingsComponent.css';
const SettingsComponent = (props) => {
  const {setShowModal, setTitleModal, setChildrenModal, getUser}=props;
  const {logout} = useAuth();
  const history = useHistory();
  const onChangePassword = () =>{
    setTitleModal('Cambiar contraseña');
    setChildrenModal(<PasswordComponent currentUser={getUser.username} logout={onLogout}/>);
  }
  const onChangeEmail = () =>{
    setTitleModal('Cambiar email');
    setChildrenModal(<EmailComponent setShowModal={setShowModal} currentEmail={getUser.email} currentUser={getUser.username}/>);
  }
  const onChangeDescription = () =>{
    setTitleModal('Cambiar datos personales');
    setChildrenModal(<PersonalDataComponent setShowModal={setShowModal} currentPerson={getUser.person}/>);
  }
  const onLogout = () =>{
    logout();
    history.push('/');
  }
  return (
    <div className='settings-form'>
      <button onClick={onChangePassword}>
        <IoKeyOutline style={{marginRight: '10px'}} />
        Cambiar contraseña
      </button>
      <button onClick={onChangeEmail}>
        <IoMailOutline style={{marginRight: '10px'}} />
        Cambiar email
      </button>
      <button onClick={onChangeDescription}>
        <IoPersonOutline style={{marginRight: '10px'}} />
        Datos personales
      </button>
      <button onClick={onLogout}>
        <IoLogOutOutline style={{marginRight: '10px'}} />
        Cerrar sesión
      </button>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
    </div>
  )
}
export default SettingsComponent
