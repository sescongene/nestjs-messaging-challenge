import { IsNotEmpty } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class MessageDto {
  @IsNotEmpty()
  conversationId: string;

  @Trim()
  @IsNotEmpty()
  message: string;
}
