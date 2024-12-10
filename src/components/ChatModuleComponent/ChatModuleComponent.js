import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ChatInputComponent from './ChatInputComponent';
import ChatMessageComponent from './ChatMessageComponent';

import './ChatModuleComponent.css';

const ChatModuleComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { sender: 'user', text: message }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8081/api/v1/messages', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      }, {
        headers: {
          'Authorization': `Bearer YOUR_API_KEY`,
        },
      });

      const botResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: 'bot', text: "Lo sentimos, algo sali\u00f3 mal!" }]);
    }
    setIsLoading(false);

  }


  return (
    <div className="appChat">
      <ChatMessageComponent messages={messages} loading={isLoading} />

      <ChatInputComponent onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  )
}

export default ChatModuleComponent;
