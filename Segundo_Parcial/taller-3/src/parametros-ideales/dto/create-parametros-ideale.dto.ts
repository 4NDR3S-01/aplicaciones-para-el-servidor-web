import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateParametrosIdealeDto {
  @IsString()
  parametro: string;

  @IsNumber()
  valor_ideal: number;

  @IsString()
  @IsOptional()
  unidad?: string;
}
