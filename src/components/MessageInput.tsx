import React, { useState, KeyboardEvent } from 'react';
import './MessageInput.css';

interface MessageInputProps {
  onSend: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <span className="message-input__container">
        <input
          type="text"
          placeholder="Repondre à Kin..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          className="message-input__field"
        />
        <button onClick={handleSend} className="message-input__button" title="Envoyer">
          <span className="message-input__icon">↑</span>
        </button>
      </span>
    </div>
  );
};

export default MessageInput;
