import { Module } from '@nestjs/common';
import { PracticasService } from './practicas.service';
import { PracticasController } from './practicas.controller';

@Module({
  imports: [],
  controllers: [PracticasController],
  providers: [PracticasService],
})
export class PracticasModule {}
