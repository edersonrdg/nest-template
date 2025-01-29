import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logger/interceptor';
import { swaggerConfig } from './docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  swaggerConfig(app);
  await app.listen(3000);
}
bootstrap();
