import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalificacionModule } from './calificacion/calificacion.module';

@Module({
  imports: [CalificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
