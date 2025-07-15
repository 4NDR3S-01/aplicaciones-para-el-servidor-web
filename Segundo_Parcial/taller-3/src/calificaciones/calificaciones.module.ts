import { Module } from '@nestjs/common';
import { CalificacionesService } from './calificaciones.service';
import { CalificacionesGateway } from './calificaciones.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calificacione } from './entities/calificacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calificacione])],
  providers: [CalificacionesGateway, CalificacionesService],
})
export class CalificacionesModule {}
