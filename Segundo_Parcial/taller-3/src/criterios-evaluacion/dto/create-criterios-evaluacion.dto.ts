import { IsString, IsNumber } from 'class-validator';

export class CreateCriteriosEvaluacionDto {
  @IsString()
  criterio: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  peso: number;
}
