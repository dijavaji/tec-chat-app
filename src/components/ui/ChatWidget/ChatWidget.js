import React, {useState, useEffect}from 'react';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';

//import BannerComponent from '../../components/ui/BannerComponent';
import { Widget, addResponseMessage } from 'react-chat-widget';

import { API_SERVER_BACKEND, } from "../../../utils/constants";
import 'react-chat-widget/lib/styles.css';
import logo from '../../../logo.svg';
const API_SERVER_SOCKET = API_SERVER_BACKEND.HOST + '/ws';

const ChatWidget = () => {
  const [stompCLient, setStompCLient] = useState(null);
  const [nickName, setNickName] = useState('usuario');

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
          displayName:nickName,
          text: newMessage,
        };
        const response = stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
        console.log(`responde api ${response}`);
        //addResponseMessage("hola mundo");
    }
  };

  return (
    <div>
      <Widget handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="My new awesome title"
        subtitle="Juana Praxthon"/>
    </div>
  )
}

export default ChatWidget;
