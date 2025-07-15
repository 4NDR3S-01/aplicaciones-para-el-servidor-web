import { PartialType } from '@nestjs/mapped-types';
import { CreateCriteriosEvaluacionDto } from './create-criterios-evaluacion.dto';

export class UpdateCriteriosEvaluacionDto extends PartialType(CreateCriteriosEvaluacionDto) {
  id: number;
}
