import React, { useEffect, useRef } from 'react';
import { Message } from '../types/ChatTypes';
import './MessageList.css';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scrolle vers le bas à chaque nouveau message
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div ref={containerRef} className="message-list">
      {messages.map((msg) => {
        const messageClass = `message-list__message message-list__message--${msg.sender}`;
        const bubbleClass = `message-list__bubble message-list__bubble--${msg.sender}`;

        return (
          <div key={msg.id} className={messageClass}>
            <div className={bubbleClass}>{msg.text}</div>
            <small className="message-list__timestamp">
              {msg.timestamp.toLocaleTimeString()}
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;