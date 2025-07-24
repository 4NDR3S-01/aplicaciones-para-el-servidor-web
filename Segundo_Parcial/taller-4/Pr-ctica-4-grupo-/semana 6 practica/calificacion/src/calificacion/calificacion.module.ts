import { Module } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CalificacionController } from './calificacion.controller';

@Module({
  imports: [],
  controllers: [CalificacionController],
  providers: [CalificacionService],
})
export class CalificacionModule {}
