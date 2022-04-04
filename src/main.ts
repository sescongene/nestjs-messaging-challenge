import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MessageModule } from './messages/message.module';

async function bootstrap() {
  const app = await NestFactory.create(MessageModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
