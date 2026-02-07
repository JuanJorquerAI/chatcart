import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['log', 'warn', 'error'] });
  app.enableShutdownHooks();
  app.enableCors({ origin: true });

  await app.listen(process.env.PORT ? Number(process.env.PORT) : 4010);
}
bootstrap();
