import { CreateGrabacioneInput } from './create-grabacione.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdateGrabacioneInput extends PartialType(CreateGrabacioneInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
