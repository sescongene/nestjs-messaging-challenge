export class MessageEntity {
  conversationId: string;
  message: string;

  constructor(partial: Partial<MessageEntity>) {
    Object.assign(this, partial);
  }
}
