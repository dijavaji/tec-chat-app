import React, {useState, useEffect}from 'react';
import { Widget, addResponseMessage, toggleWidget} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import './ChatBoxComponent.css'

const ChatBoxComponent = () => {

  useEffect(() => {
   addResponseMessage('Welcome to this **awesome** chat!');
   toggleWidget(); // Abre el widget al montar el componente
 }, []);

  const handleNewUserMessage = async (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    try{
      // Simular respuesta de la API (reemplazar con llamada real a sendMessageToAPI)
      const response = await new Promise(resolve => {
          setTimeout(() => {
              resolve(`Respuesta simulada: "${newMessage}"`);
          }, 1000);
      });
      addResponseMessage(response);
    }catch(e){
      console.error('error',e);
    }
  };

  const getCustomLauncher = (handleToggle) =>{
    //console.log(handleToggle);
    return <button onClick={handleToggle}>This is my launcher component!</button>
  }

  return (
    <div className="chat-widget-container">
      <Widget fullScreenMode={true}  showCloseButton={false} autofocus={true}
        title="Soporte en vivo"
        handleNewUserMessage={handleNewUserMessage}/>
    </div>
  )
}

export default ChatBoxComponent
