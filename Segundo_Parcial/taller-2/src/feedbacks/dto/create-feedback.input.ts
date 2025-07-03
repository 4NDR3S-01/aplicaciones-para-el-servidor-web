import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

@InputType()
export class CreateFeedbackInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  comentario: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  calificacion: number;

  @Field(() => Int)
  @IsInt()
  grabacionId: number;
}
