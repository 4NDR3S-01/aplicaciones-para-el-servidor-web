import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedbackDto } from './create-feedback.dto';
import { IsString } from 'class-validator';

export class UpdateFeedbackDto extends PartialType(CreateFeedbackDto) {
    @IsString()
    id: string;
}
