import React, {useState, useEffect}from 'react';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';
import { v4 as uuidv4 } from 'uuid';
import { Widget, addResponseMessage, toggleWidget, toggleMsgLoader, renderCustomComponent} from 'react-multiple-chat-widget';
import { API_SERVER_BACKEND, AUDIT_APP, APP_NAME} from "../../utils/tec-chat.constants";

import 'react-multiple-chat-widget/lib/styles.css';


import './ChatBoxComponent.css'

const API_SERVER_SOCKET = API_SERVER_BACKEND.HOST_MESSAGE + '/ws';

const ChatBoxComponent = () => {

  //const [chatToggle, setChatToggle] = useState(false);
  const [stompCLient, setStompCLient] = useState(null);
  const [messageId] = useState(uuidv4(),);
  const [nickName, setNickName] = useState('usuario');

  useEffect(() => {
   //addResponseMessage('Welcome to this **awesome** chat!');
   const chatOpen = document.querySelector('.rcw-conversation-container') !== null;
   if(!chatOpen){
      toggleWidget(messageId); // Abre el widget al montar el componente
   }

   const socket = new Sockjs(API_SERVER_SOCKET);//new Sockjs('http://127.0.0.1:8081/ws');
   const client = Stomp.over(socket);
   client.connect({},()=>{
     client.subscribe('/topic/messages', (message)=>{
       const receivedMessages = JSON.parse(message.body);
       console.log(receivedMessages);
       //addResponseMessage((prevMessages)=> [...prevMessages, receivedMessages]);
       toggleMsgLoader(messageId);
       addResponseMessage(messageId, receivedMessages.text);
     });
   });
   setStompCLient(client);
   return () =>{
     client.disconnect();
   };

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
      /*const response = await new Promise(resolve => {
          setTimeout(() => {
              resolve(`Respuesta simulada: "${newMessage}"`);
          }, 1000);
      });*/
      const chatMessage = {
        id:messageId,
        displayName:nickName,
        text: newMessage,
        assistantName:APP_NAME,
        createdBy:AUDIT_APP.CREATE_BY
      };

      toggleMsgLoader(messageId);
      const response = stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
      //console.log(`responde api ${response}`);
      //addResponseMessage(response);
    }

    }catch(e){
      console.error('error',e);
      toggleMsgLoader(messageId);
      addResponseMessage(messageId, e.message);
      //console.log(JSON.stringify(e.message));
      //const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    }
  };

  const getCustomLauncher = (handleToggle) =>{
    //console.log(handleToggle);
    return <button onClick={handleToggle}>This is my launcher component!</button>
  }

  return (
    <div className="chat-widget-container">
      <Widget chatId={messageId} fullScreenMode={true}  showCloseButton={false} autofocus={true}
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
      <button onClick={onClick}>Ver detalles</button>
    </div>
  );
};

export default ChatBoxComponent
