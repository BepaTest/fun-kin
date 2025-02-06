export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  senderLabel?: string;
  timestamp: Date;
}
