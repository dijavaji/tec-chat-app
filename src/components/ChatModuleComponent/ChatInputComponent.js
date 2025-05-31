import React, { useState } from 'react';

const ChatInputComponent = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input">
      <form onSubmit={handleSubmit}>
        <textarea
          className="chat-textarea"
          type="text"
          rows="1" cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit" disabled={isLoading} className={isLoading? 'disabled-btn':''}>Enviar</button>
      </form>
    </div>
  );
}

export default ChatInputComponent;
