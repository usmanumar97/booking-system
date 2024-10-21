import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const helmet = require('helmet');  // Use require for Helmet

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  
  // Call helmet as middleware
  app.use(helmet());

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
