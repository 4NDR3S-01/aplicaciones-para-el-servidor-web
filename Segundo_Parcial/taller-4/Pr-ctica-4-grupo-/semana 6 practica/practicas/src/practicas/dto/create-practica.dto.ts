import { IsString } from "class-validator";

export class CreatePracticaDto {
    @IsString()
    titulo: string;
    @IsString()
    descripcion: string;
}
