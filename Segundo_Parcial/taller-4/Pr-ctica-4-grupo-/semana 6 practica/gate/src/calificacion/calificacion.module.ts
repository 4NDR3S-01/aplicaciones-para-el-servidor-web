import { Module } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';
import { CalificacionController } from './calificacion.controller';
import { TransportModule } from '../modules/transport.module';
@Module({
  imports: [TransportModule],
  controllers: [CalificacionController],
  providers: [CalificacionService],
})
export class CalificacionModule {}
