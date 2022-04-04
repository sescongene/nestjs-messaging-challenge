import { Injectable } from '@nestjs/common';
import { MessageEntity } from './entities/message.entity';
import { Message } from './types/message';

const DEFAULT_RESPONSE = "Sorry, I don't understand.";

const CONTEXT = [
  {
    rules: ['hello', 'hi'],
    message: 'Welcome to StationFive.',
  },

  {
    rules: ['goodbye', 'bye'],
    message: 'Thank you, see you around.',
  },
];

@Injectable()
export class MessageService {
  getResponse(data: Message): MessageEntity {
    const message = data.message.replace(/[^a-zA-Z ]/g, ' ').split(' ');

    const response = message.reduce((previousValue, currentValue) => {
      const res = CONTEXT.find((response) =>
        response.rules.includes(currentValue.toLowerCase()),
      );

      if (previousValue !== DEFAULT_RESPONSE) {
        return previousValue;
      }

      return res ? res.message : DEFAULT_RESPONSE;
    }, DEFAULT_RESPONSE);
    return new MessageEntity({
      conversationId: data.conversationId,
      message: response,
    });
  }
}
