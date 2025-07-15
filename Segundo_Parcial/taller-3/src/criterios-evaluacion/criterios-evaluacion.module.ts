import { Module } from '@nestjs/common';
import { CriteriosEvaluacionService } from './criterios-evaluacion.service';
import { CriteriosEvaluacionGateway } from './criterios-evaluacion.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriteriosEvaluacion } from './entities/criterios-evaluacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriteriosEvaluacion])],
  providers: [CriteriosEvaluacionGateway, CriteriosEvaluacionService],
})
export class CriteriosEvaluacionModule {}
