export interface IMessage {
  username: string;
  room?: string;
  text: string;
  createdAt?: Date;
}
