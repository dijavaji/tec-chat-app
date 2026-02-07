import React, {useState, useEffect, dropMessages} from 'react';
import { Widget, addResponseMessage, toggleWidget, toggleMsgLoader, renderCustomComponent} from 'react-chat-widget';
import { useChatContext } from "../../context/ChatContext";
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';
import { v4 as uuidv4 } from 'uuid';
import { API_SERVER_BACKEND, AUDIT_APP, APP_NAME } from '../../utils/tec-chat.constants';


//import moment from 'moment';

const API_SERVER_SOCKET = API_SERVER_BACKEND.HOST_MESSAGE + '/ws';
//import './ChatComponent.css';

//https://github.com/gurkanucar/socketio-simple-chat
const ChatComponent = ({ chatId, userId, fullScreenMode, showCloseButton, autofocus, profileAvatar, title, subtitle, resizable, titleAvatar}) => {
  const { addMessage } = useChatContext();
  //const [socket, setSocket] = useState(null);
  const [stompCLient, setStompCLient] = useState(null);
  const [messageId] = useState(uuidv4(),);
  const [nickName, setNickName] = useState('usuarioId');
  // Initialize public chat WebSocket
  useEffect(() => {
    //dropMessages();
    const socket = new Sockjs(API_SERVER_SOCKET);//new Sockjs('http://127.0.0.1:8081/ws');
    //setSocket(socket);
    const client = Stomp.over(socket);
    client.connect({}, () => {
      client.subscribe('/topic/messages', (message) => {
        const receivedMessages = JSON.parse(message.body);
        console.log('Public Chat Message Received:', receivedMessages);

        addMessage(receivedMessages.generationId, receivedMessages.text);
        addResponseMessage(receivedMessages.text);
      });
    });

    setStompCLient(client);
    return () => {
      if (client.connected) {
        client.disconnect();
      }
    };
  }, [chatId, addMessage]);

  /*const sendMessage = (chatId, message) => {
      const messageObj = { chatId, message };
      if (socket) {
          socket.send(JSON.stringify(messageObj));
      }
  };*/

  //const handleNewResponseMessage = (newMessage) => {
        //addMessage(chatId, newMessage);
        //addResponseMessage(`Mensaje recibido en chat ${chatId}: ${newMessage}`);
    //};

    const handleNewResponseMessage = async (newMessage) => {
    //console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    try{
      // Simular respuesta de la API (reemplazar con llamada real a sendMessageToAPI)
      toggleMsgLoader();
      /*const response = await new Promise(resolve => {
          setTimeout(() => {
              resolve(`Respuesta simulada: "${newMessage}"`);
          }, 1000);
      });*/
      const chatMessage = {
        id:nickName,
        text: newMessage,
        assistantName:APP_NAME,
        createdBy:AUDIT_APP.CREATE_BY
      };
      const response =  stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
      console.log(`responde api ${response}`);
      //addMessage("idasdadsf", response.text);
      //addResponseMessage(response.text);
      toggleMsgLoader();


    }catch(e){
      console.error('error',e);
      addResponseMessage(e.message);
      toggleMsgLoader();
      //console.log(JSON.stringify(e.message));
      //const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    }
  };

  return (
          <Widget chatId={chatId} fullScreenMode={fullScreenMode}  showCloseButton={showCloseButton} autofocus={autofocus}
            subtitle={subtitle}
            title={title}
            handleNewUserMessage={handleNewResponseMessage} profileAvatar={profileAvatar}
            titleAvatar={titleAvatar} resizable={resizable}/>
  )
}

export default ChatComponent;
