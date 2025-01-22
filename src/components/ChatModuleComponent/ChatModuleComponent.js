import React, {useState, useEffect} from 'react';

import MessageService from '../../services/message.service';
import { AUDIT_APP, MESSAGE_ROLE} from '../../utils/tec-chat.constants';

import ChatInputComponent from './ChatInputComponent';
import ChatMessageComponent from './ChatMessageComponent';


import './ChatModuleComponent.css';

const ChatModuleComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { sender: MESSAGE_ROLE.SENDER_USER, text: message }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      //const botResponse = response.data.choices[0].message.content;
      const botResponse = await MessageService.getMessage({
        id: "string",
        text: message,
        createdBy: AUDIT_APP.CREATE_BY,
        assistantName: "tec_user_legal_bot"
      });
      setMessages([...newMessages, { sender: MESSAGE_ROLE.SENDER_CHATBOT, text: botResponse.data.text }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: MESSAGE_ROLE.SENDER_CHATBOT, text: "Lo sentimos, algo sali\u00f3 mal!" }]);
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
