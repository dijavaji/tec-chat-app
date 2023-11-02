import React, {useState, useEffect} from 'react';
import Stomp from 'stompjs';
import Sockjs from 'sockjs-client';

import IconButton from '@material-ui/core/Button';
import { TextField, Typography, ListItemText, Avatar, List, ListItem,ListItemAvatar} from '@material-ui/core';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [nickName, setNickName] = useState('');
  const [stompCLient, setStompCLient] = useState(null);

  useEffect(()=>{
    const socket = new Sockjs('http://127.0.0.1:8081/ws');
    const client = Stomp.over(socket);

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
    console.log(e.target.value);
    setNickName(e.target.value);
  }

  const handleMessageChange = (e)=>{
    setMessage(e.target.value);
  };

  const sendMessage = () =>{
    if(message.trim()){
        const chatMessage = {
          displayName:nickName,
          text: message,
        };
        stompCLient.send('/app/chat', {}, JSON.stringify(chatMessage));
        setMessage('');
    }
  };

  return (
   <div>
     <List>
       {messages.map((msg, index) => (
         <ListItem key={index}>
           <ListItemAvatar>
             <Avatar>{msg.displayName.charAt(0)}</Avatar>
           </ListItemAvatar>
           <ListItemText
             primary={
               <Typography variant="subtitle1">{msg.displayName}</Typography>
             }
             secondary={msg.text}
           />
         </ListItem>
       ))}
     </List>

     <div style={{ display: 'flex', alignItems: 'center' }}>
       <TextField
         placeholder="Enter your nickname"
         value={nickName}
         onChange={handleNickNameChange}
         autoFocus
       />
       <TextField
         placeholder="Type a message"
         value={message}
         onChange={handleMessageChange}
         fullWidth
       />
       <IconButton onClick={sendMessage} disabled={!message.trim()}>
         send
       </IconButton>
     </div>
   </div>
 );
}

export default App;
