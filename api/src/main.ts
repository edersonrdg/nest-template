import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ReqLoggingInterceptor } from './logger/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ReqLoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
