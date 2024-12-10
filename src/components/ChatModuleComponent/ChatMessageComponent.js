import React from 'react'

const ChatMessageComponent = ({ messages, loading }) => {
  return (
    <div className="chatbox">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          <p>{msg.text}</p>
        </div>
      ))}
      {loading && <div className="message bot">Typing...</div>}
    </div>
  );
};

export default ChatMessageComponent;
