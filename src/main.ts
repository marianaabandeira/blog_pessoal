import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Fuso horário
  process.env.TZ = '-03:00';

  // Pipeline global de validação
  app.useGlobalPipes(
    new ValidationPipe(),
  );

  // CORS configurado para ambiente de produção
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
