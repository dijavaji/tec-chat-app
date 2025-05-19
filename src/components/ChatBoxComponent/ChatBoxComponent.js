import React, {useState, useEffect}from 'react';
import { Widget, addResponseMessage, toggleWidget, toggleMsgLoader, renderCustomComponent} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import './ChatBoxComponent.css'

const ChatBoxComponent = () => {

  //const [chatToggle, setChatToggle] = useState(false);

  useEffect(() => {
   //addResponseMessage('Welcome to this **awesome** chat!');

   const chatOpen = document.querySelector('.rcw-conversation-container') !== null;
   if(!chatOpen){
      toggleWidget(); // Abre el widget al montar el componente
   }

 }, []);

  const handleNewUserMessage = async (newMessage) => {
    //console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    try{

      if (newMessage.toLowerCase().includes('info')) {
      renderCustomComponent(CustomCard, {
        title: 'Información',
        description: 'Aquí tienes los detalles que pediste.',
        onClick: () => alert('Información adicional mostrada.'),
      });
    } else {
      // Simular respuesta de la API (reemplazar con llamada real a sendMessageToAPI)
      toggleMsgLoader();
      const response = await new Promise(resolve => {
          setTimeout(() => {
              resolve(`Respuesta simulada: "${newMessage}"`);
          }, 1000);
      });
      toggleMsgLoader();
      addResponseMessage(response);
    }

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
        subtitle="Estamos aqu&#237; para ayudarte"
        title="Soporte en vivo"
        handleNewUserMessage={handleNewUserMessage}/>
    </div>
  )
}

const CustomCard = ({ title, description, onClick }) => {
  return (
    <div className='card'>
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={onClick}>¡Haz clic!</button>
    </div>
  );
};

export default ChatBoxComponent
