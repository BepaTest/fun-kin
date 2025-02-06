import React, { useEffect, useRef } from 'react';
import { Message } from '../types/ChatTypes';
import './MessageList.css';
import MessageBubble from './MessageBubble';

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
        return <MessageBubble message={msg} />;
      })}
    </div>
  );
};

export default MessageList;
