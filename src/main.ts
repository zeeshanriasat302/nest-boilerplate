import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // stripping out elements that are not defined in our dto's.
    whitelist: true,
  }))
  await app.listen(3000);
}
bootstrap();
