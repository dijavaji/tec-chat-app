import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";

import './HeaderProfile.css';

const HeaderProfile = (props) => {

    const {getUser, auth, handlerModal} = props;

  return (
    <div className='header-profile'>
      <h2>{getUser.username}</h2>
      {getUser.username === auth.username ? (
        <button onClick={()=>handlerModal('settings')}>
          <IoSettingsOutline />
          Ajustes
        </button>
      ) : (
        <button>Asignar</button>
      )}
    </div>
  )
}

export default HeaderProfile;
