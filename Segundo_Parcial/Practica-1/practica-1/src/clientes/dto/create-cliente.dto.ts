import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsNumber()
  @IsOptional()
  id?: number;
  @IsString()
  nombre: string;
  @IsString()
  correo?: string;
}
