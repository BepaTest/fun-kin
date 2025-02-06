import React, { useState } from 'react';
import { type Message } from '../types/ChatTypes';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';

import './Chat.css';

const predefinedResponses: { [keyword: string]: string } = {
  bonjour: 'Hey, mon petit loulou ! Viens voir Fun Kin pour un gros câlin avant de discuter ?',
  hello: 'Coucou, ma petite canaille ! Dis-moi, qui est prêt à faire des blagues en famille ?',
  merci: 'Mais voyons, tu sais bien que tatie est toujours là pour toi, pas besoin de merci !',
  aide: 'Pas d’inquiétude, je suis comme mamie : toujours partante pour me mêler de tout. Allez, raconte !',
};

const randomResponses: string[] = [
  'Oh, ça sent la bonne histoire de famille croustillante ! Vas-y, développe !',
  "Holà, j'adore quand tu me parles ! Peux-tu en dire un peu plus, mon poussin ?",
  'Bien noté ! Autre chose à confier à Fun Kin indiscret ?',
  'T’inquiète, c’est ton oncle préféré qui gère. J’suis sur le coup !',
  'Oups, tatie a mal capté avec son vieux transistor. Tu peux répéter, mon trésor ?',
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (userMessage: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Génération de la réponse du bot
    const botResponse = generateBotResponse(userMessage);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      senderLabel: 'Fun Kin',
      timestamp: new Date(),
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
    // Sinon réponse aléatoire
    const randomIndex = Math.floor(Math.random() * randomResponses.length);
    return randomResponses[randomIndex];
  };

  return (
    <div className="chat">
      <ChatHeader userName="Thibaud" />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
