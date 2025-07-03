import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateGrabacioneInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  url: string;

  @Field()
  @IsDateString()
  fecha: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  descripcion: string;
}
