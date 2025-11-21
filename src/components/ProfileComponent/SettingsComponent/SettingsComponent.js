import React from 'react';

import './SettingsComponent.css';

const SettingsComponent = (props) => {
  const {setShowModal}=props;
  return (
    <div className='settings-form'>
      <button>Cambiar contrase&#241;a</button>
      <button>Cambiar email</button>
      <button>Descripci&#243;n</button>
      <button>Cerrar sesi&#243;n</button>
      <button onClick={() => setShowModal(false)}>Cancelar</button>
    </div>
  )
}

export default SettingsComponent
