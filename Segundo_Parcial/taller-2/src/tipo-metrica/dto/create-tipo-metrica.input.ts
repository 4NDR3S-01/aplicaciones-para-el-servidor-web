import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTipoMetricaInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
