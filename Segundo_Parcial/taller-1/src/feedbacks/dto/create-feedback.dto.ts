import { IsString, IsNumber, IsOptional, Min, Max, Length } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  @Length(1, 255)
  titulo: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  calificacion: number;

  @IsString()
  @Length(1, 100)
  autor: string;
} 