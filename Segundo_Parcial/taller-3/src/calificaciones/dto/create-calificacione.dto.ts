import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCalificacioneDto {
  @IsString()
  alumno: string;

  @IsString()
  materia: string;

  @IsNumber()
  calificacion: number;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
