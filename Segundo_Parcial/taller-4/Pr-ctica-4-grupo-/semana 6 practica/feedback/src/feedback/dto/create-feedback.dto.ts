import { IsString } from "class-validator";

export class CreateFeedbackDto {
    @IsString()
    comentario: string;
}
