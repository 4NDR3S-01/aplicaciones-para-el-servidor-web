import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PracticasModule } from './practicas/practicas.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [UsersModule, PracticasModule, CalificacionModule, FeedbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
