import { IsString, IsNumber, IsOptional, Min, Length } from 'class-validator';

export class CreateGrabacionDto {
  @IsString()
  @Length(1, 255)
  titulo: string;

  @IsString()
  descripcion: string;

  @IsString()
  @Length(1, 255)
  archivo: string;

  @IsNumber()
  @Min(0)
  duracion: number;

  @IsString()
  @IsOptional()
  @Length(1, 50)
  formato?: string;
} 