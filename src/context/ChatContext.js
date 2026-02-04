import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
   const [chatMessages, setChatMessages] = useState({});

  const addMessage = async (chatId, newMessage) => {
        setChatMessages((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...(prevMessages[chatId] || []), newMessage],
        }));
    };

  return (
    <ChatContext.Provider value={{ chatMessages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
    return useContext(ChatContext);
};
