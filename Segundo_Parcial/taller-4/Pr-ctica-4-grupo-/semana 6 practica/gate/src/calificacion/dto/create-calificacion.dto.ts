import { IsString } from "class-validator";

export class CreateCalificacionDto {
    @IsString()
    estudianteId: string;
    @IsString()
    nota: string;
}
