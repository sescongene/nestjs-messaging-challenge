import { IsNotEmpty } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  conversationId: string;
  @IsNotEmpty()
  message: string;
}
