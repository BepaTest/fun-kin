import React, { useState } from 'react';
import { Message } from '../types/ChatTypes';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

import './Chat.css'; // Import du fichier CSS pour ce composant

const predefinedResponses: { [keyword: string]: string } = {
  bonjour: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
  hello: "Hello ! Comment puis-je vous aider aujourd'hui ?",
  merci: "Je vous en prie !",
  aide: "Je suis là pour vous aider. De quoi avez-vous besoin ?"
};

const randomResponses: string[] = [
  "Intéressant, dites-m'en plus !",
  "Je vois. Pouvez-vous préciser votre demande ?",
  "C'est noté. Autre chose ?",
  "Je suis là pour vous aider.",
  "Je ne suis pas sûr de comprendre, pouvez-vous reformuler ?"
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (userMessage: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newMessage]);

    // Génère la réponse du bot
    const botResponse = generateBotResponse(userMessage);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const generateBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    for (const keyword in predefinedResponses) {
      if (lowerInput.includes(keyword)) {
        return predefinedResponses[keyword];
      }
    }
    const randomIndex = Math.floor(Math.random() * randomResponses.length);
    return randomResponses[randomIndex];
  };

  return (
    <div className="chat">
      <h1 className="chat__heading">Chatbot IA - Exemple</h1>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;