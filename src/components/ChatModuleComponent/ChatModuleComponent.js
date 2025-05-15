import React, {useState} from 'react';
import { triggerBase64Download } from 'common-base64-downloader-react';
import { v4 as uuidv4 } from 'uuid';
import {toast} from "react-toastify";

import FileService from '../../services/file.service.js';

import MessageService from '../../services/message.service';
import { AUDIT_APP, MESSAGE_ROLE, APP_NAME} from '../../utils/tec-chat.constants';

import ChatInputComponent from './ChatInputComponent';
import ChatMessageComponent from './ChatMessageComponent';


import './ChatModuleComponent.css';

const ChatModuleComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userId] = useState(uuidv4(),);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { sender: MESSAGE_ROLE.SENDER_USER, text: message }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      //const botResponse = response.data.choices[0].message.content;
      //TODO tomar assistantName asociados al usuario y id
      const botResponse = await MessageService.getMessage({
        id: userId,
        text: message,
        createdBy: AUDIT_APP.CREATE_BY,
        assistantName: APP_NAME
      });
      //console.log('respuesta bot',botResponse.data);
      const metadata = botResponse.data.metadata? botResponse.data.metadata : '';
      setMessages([...newMessages, { sender: MESSAGE_ROLE.SENDER_CHATBOT, text: botResponse.data.text, metadata: metadata}]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { sender: MESSAGE_ROLE.SENDER_CHATBOT, text: "Lo sentimos, algo sali\u00f3 mal!" }]);
    }
    setIsLoading(false);

  }

  const handleDownload = async (id) =>{
    //const file = e.target.value;
    //e.preventDefault();
    console.log("descargando",id);
    try{
      const response = await FileService.getDownloadFile(id);
      if(response.success){
        toast.success(`Descargando ${response.data.fileName}.`);
        const base64Data = response.data.fileBase64.startsWith('data:') ? response.data.fileBase64 : `data:${response.data.fileType};base64,${response.data.fileBase64}`;

        triggerBase64Download(base64Data, response.data.fileName);
        setIsLoading(false);
      }
    }catch(e){
      setIsLoading(false);
      //console.log("error",e.response.data);
      console.log("error",e);
      const errMsg = e.response? e.response.data.message: e.message;
      toast.error(errMsg);
    }

  }


  return (
    <div className="appChat">
      <ChatMessageComponent messages={messages} loading={isLoading} onDownloadDocument={handleDownload}/>

      <ChatInputComponent onSendMessage={handleSendMessage} isLoading={isLoading}/>
    </div>
  )
}

export default ChatModuleComponent;
