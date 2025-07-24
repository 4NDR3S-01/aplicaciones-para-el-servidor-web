import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FeedbackModule } from './feedback/feedback.module';
import { CalificacionModule } from './calificacion/calificacion.module';
import { PracticasModule } from './practicas/practicas.module';

@Module({
  imports: [UsersModule, FeedbackModule, CalificacionModule, PracticasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
