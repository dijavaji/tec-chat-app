import React from 'react';

import './HeaderProfile.css';

const HeaderProfile = (props) => {

    const {getUser, auth, handlerModal} = props;

  return (
    <div className='header-profile'>
      <h2>{getUser.username}</h2>
      {getUser.username === auth.username ? (<button onClick={()=>handlerModal('settings')} >Ajustes</button>) : (<button>asignar</button>)}
    </div>
  )
}

export default HeaderProfile;
