import { IsString, IsBoolean, IsOptional, Length } from 'class-validator';

export class CreateTipoMetricaDto {
  @IsString()
  @Length(1, 100)
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  @Length(1, 50)
  unidad: string;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;
} 