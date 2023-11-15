import React, {useState, useEffect} from 'react';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';
import moment from 'moment';

import './ChatComponent.css';

//https://github.com/gurkanucar/socketio-simple-chat
const ChatComponent = () => {
  const [nickName, setNickName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [stompCLient, setStompCLient] = useState(null);
  const [isOwnMessage, setIsOwnMessage] = useState(false);

  useEffect(()=>{
    const socket = new Sockjs('http://127.0.0.1:8081/ws');
    const client = Stomp.over(socket);
    setIsOwnMessage(false);
    client.connect({},()=>{
      client.subscribe('/topic/messages', (message)=>{
        const receivedMessages = JSON.parse(message.body);
        setMessages((prevMessages)=> [...prevMessages, receivedMessages]);
      });
    });
    setStompCLient(client);
    return () =>{
      client.disconnect();
    };
  },[]);

  const handleNickNameChange = (e)=>{
    setNickName(e.target.value);
  }

  const handleMessageChange = (e)=>{
    setMessage(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("chateando");
    if(message.trim()){
        const chatMessage = {
          displayName:nickName,
          text: message,
        };
        stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
        setMessage('');
        setIsOwnMessage(true);
    };
  }

  return (
    <div>
        <h1 className="title">iChat ☝📮💬</h1>
        <div className="main-chat">
          <div className="name">
            <span> <i className="far fa-user"></i></span>
            <input type="text" id="name-input"  className="name-input"
              value={nickName}
              onChange={handleNickNameChange}
              placeholder="anonymous"
              maxLength="20"/>
          </div>
          <ul className="message-container" id="message-container">
            {messages.map((msg, index) => (
              <li className= {isOwnMessage? 'message-right' : 'message-left'} key={index}>
                <p className="message" key={index}> {msg.text}
                  <span> {msg.displayName} ● {moment(msg.createdDate).fromNow()} </span>
                </p>
              </li>
            ))}

            <li className="message-feedback">
              <p  className="feedback" id="feedback">✍️ Praxis está escribiendo un mensaje...</p>
            </li>
          </ul>

          <form className="message-form" id="message-form" onSubmit={handleSubmit}>
             <input
               type="text"
               name="message"
               id="message-input"
               className="message-input"
               value={message}
               onChange={handleMessageChange}
             />
             <div className="v-divider"></div>
             <button type="submit" className="send-button" disabled={!message.trim()}>
               enviar <span><i className="fas fa-paper-plane"></i></span>
             </button>
           </form>
        </div>
        <h3 className="clients-total" id="client-total">Total de clientes: 0</h3>
    </div>
  )
}

export default ChatComponent;
