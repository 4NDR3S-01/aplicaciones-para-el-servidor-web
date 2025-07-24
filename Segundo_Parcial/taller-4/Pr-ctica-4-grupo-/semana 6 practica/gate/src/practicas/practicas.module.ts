import { Module } from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { PracticasController } from './practicas.controller';
import { TransportModule } from '../modules/transport.module';
@Module({
  imports: [TransportModule],
  controllers: [PracticasController],
  providers: [PracticasService],
})
export class PracticasModule {}
