import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
 
  const natsUrl = process.env.NATS_URL || 'nats://localhost:4222';
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.NATS,
    options: {
      servers: [natsUrl],
    },
  });
  app.listen()
}
bootstrap();
