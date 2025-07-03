import { CreateFeedbackInput } from './create-feedback.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';

@InputType()
export class UpdateFeedbackInput extends PartialType(CreateFeedbackInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  id: number;
}
