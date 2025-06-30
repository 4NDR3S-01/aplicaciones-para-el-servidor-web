import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsEmpty()
  @Field(() => String, { description: 'Example field (placeholder)' })
  nombre: string;

  @IsString()
  @IsEmpty()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  correo: string;
}
