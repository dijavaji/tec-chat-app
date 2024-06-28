import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';

//import BannerComponent from '../../components/ui/BannerComponent';
import { Widget, addResponseMessage, renderCustomComponent} from 'react-chat-widget';

import { API_SERVER_BACKEND, AUDIT_APP, APP_NAME} from "../../../utils/tec-chat.constants";
import 'react-chat-widget/lib/styles.css';
import logo from '../../../logo.svg';
import botGif from '../../../assets/img/l3sgiphy.gif';
import "./ChatWidget.css";

const API_SERVER_SOCKET = API_SERVER_BACKEND.HOST + '/ws';

const ChatWidget = () => {
  const [stompCLient, setStompCLient] = useState(null);
  const [nickName, setNickName] = useState('usuario');
  //const [uuid, setUuid] = useState(uuidv4());
  const [messageId] = useState(uuidv4(),);
  useEffect(() => {
    const socket = new Sockjs(API_SERVER_SOCKET);//new Sockjs('http://127.0.0.1:8081/ws');
    const client = Stomp.over(socket);
    //addResponseMessage('Bienvenidos a este incre\u00edble chat\u0021');
    client.connect({},()=>{
      client.subscribe('/topic/messages', (message)=>{
        const receivedMessages = JSON.parse(message.body);
        console.log(receivedMessages);
        //addResponseMessage((prevMessages)=> [...prevMessages, receivedMessages]);
        addResponseMessage(receivedMessages.response);
      });
    });
    setStompCLient(client);
    return () =>{
      client.disconnect();
    };
  }, []);


  const handleNewUserMessage = (newMessage) => {
    //console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    if(newMessage.trim()){
        const chatMessage = {
          id:messageId,
          displayName:nickName,
          text: newMessage,
          assistantName:APP_NAME,
          createdBy:AUDIT_APP.CREATE_BY
        };
        const response = stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
        console.log(`responde api ${response}`);
        //addResponseMessage("hola mundo");
    }
  };
  /*const getCustomLauncher = (handleToggle) =>
    <button onClick={handleToggle}>This is my launcher component!</button>
  renderCustomComponent(getCustomLauncher)*/

  return (
    <div>
      <Widget id={messageId} handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title={<span>Asesor Virtual Inteligente</span>}
        subtitle=""
        titleAvatar={botGif}
        resizable={false}/>
    </div>
  )
}

export default ChatWidget;
