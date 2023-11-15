import React, {useState, useEffect}from 'react';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';

import { Widget, addResponseMessage } from 'react-chat-widget';

import "./Home.css";
import 'react-chat-widget/lib/styles.css';
import logo from '../../logo.svg';

import ChatComponent from "../../components/ChatComponent";
import ChatRoomComponent from "../../components/ChatRoomComponent";

export default function Home() {
  const [stompCLient, setStompCLient] = useState(null);
  const [nickName, setNickName] = useState('usuario');

  useEffect(() => {
    const socket = new Sockjs('http://127.0.0.1:8081/ws');
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
    <div className="container" >
      <h2>Lorem ipsum dolor sit amet</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent iaculis velit libero, vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non lacus diam</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus. Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus a, hendrerit ornare urna. </p>

      <div className="dark-background">
        <h3>Lorem ipsum dolor sit.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus.</p>
        <div className="nested-div">
          <p>Lorem ipsum dolor</p>
        </div>
      </div>
          <div className="grid-auto-flow">
            <div className="flow padding-400 surface-neutral-100">
              <img className="icon" alt="comment" src="https://assets.codepen.io/308367/comment.svg" />
              <h3 className="fs-400 fw-bold">Store and sync</h3>
              <p>Keep all your files securely stored, up to date, and accessible from any device</p>
            </div>
            <div className="flow padding-400 surface-neutral-100">
              <img className="icon" alt="share" src="https://assets.codepen.io/308367/share.svg" />
              <h3 className="fs-400 fw-bold">Share</h3>
              <p>Quickly send any file—big or small—to anyone, even if they don’t have a Dropbox account.</p>
            </div>
            <div className="flow padding-400 surface-neutral-100">
              <img className="icon" alt="shield" src="https://assets.codepen.io/308367/shield.svg" />
              <h3 className="fs-400 fw-bold">Stay secure</h3>
              <p>Keep your files private with multiple layers of protection from the service trusted by millions.</p>
            </div>
          </div>
          <div className="">
            <Widget handleNewUserMessage={handleNewUserMessage}
              profileAvatar={logo}
              title="My new awesome title"
              subtitle="Juana Praxthon"/>
          </div>

    </div>
  )
}
