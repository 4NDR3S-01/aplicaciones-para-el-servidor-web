import { CreateTipoMetricaInput } from './create-tipo-metrica.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdateTipoMetricaInput extends PartialType(CreateTipoMetricaInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
