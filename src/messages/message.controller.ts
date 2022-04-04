import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { MessageEntity } from './entities/message.entity';
import { MessageService } from './message.service';

@Controller()
export class MessageController {
  constructor(private readonly appService: MessageService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('message')
  send(@Body() messageDto: MessageDto): MessageEntity {
    return this.appService.getResponse(messageDto);
  }
}
