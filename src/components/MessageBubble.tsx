import React from 'react';
import './MessageBubble.css';
import { type Message } from '../types/ChatTypes';

interface MessageBubbleProps {
  message: Message;
}

const iconPath =
  'M21.509,10H2.491c-.939,0-1.517,.398-1.835,.732C.208,11.201-.03,11.872,.003,12.57c.301,6.409,5.571,11.43,11.997,11.43s11.696-5.021,11.997-11.43c.033-.699-.205-1.369-.652-1.838-.318-.334-.896-.732-1.835-.732Zm-9.509,11c-4.629,0-8.458-3.47-8.956-8h5.097c.446,1.722,1.997,3,3.859,3s3.412-1.278,3.858-3h5.097c-.498,4.53-4.327,8-8.956,8Zm-4-12c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v3c0,1.654,1.346,3,3,3Zm-1-6c0-.551,.449-1,1-1s1,.449,1,1v3c0,.551-.449,1-1,1s-1-.449-1-1V3Zm8,6c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v3c0,1.654,1.346,3,3,3Zm-1-6c0-.551,.449-1,1-1s1,.449,1,1v3c0,.551-.449,1-1,1s-1-.449-1-1V3Zm5.806,5.086c-.232-.255-.213-.65,.043-.882h0c.255-.232,.65-.213,.882,.042h0c.286,.316,.736,.504,1.204,.504,.448,0,.764-.265,.81-.521,.062-.345-.451-.562-.61-.621-.752-.277-1.43-.58-1.43-.58-.6-.382-.864-.969-.777-1.579,.094-.649,.568-1.178,1.239-1.38,1.317-.397,2.407,.499,2.452,.537l.003,.002c.263,.221,.297,.613,.076,.876l-.005,.005c-.221,.263-.613,.297-.875,.076-.025-.021-.633-.495-1.29-.299-.293,.088-.351,.282-.362,.361-.008,.059-.013,.206,.13,.302,.016,0,.614,.263,1.272,.506,1.223,.451,1.529,1.336,1.408,2.014-.16,.899-1.019,1.552-2.04,1.552-.826,0-1.603-.333-2.13-.914Z';

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div
      className={`message-bubble message-bubble--${message.sender}`}
      title={message.senderLabel || ''}
    >
      {message.senderLabel && isBot && (
        <span className="message-bubble__label">
          <svg
            className="message-bubble__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d={iconPath} />
          </svg>
          <span>{message.senderLabel}</span>
        </span>
      )}

      <div className="message-bubble__content">{message.text}</div>
    </div>
  );
};

export default MessageBubble;
