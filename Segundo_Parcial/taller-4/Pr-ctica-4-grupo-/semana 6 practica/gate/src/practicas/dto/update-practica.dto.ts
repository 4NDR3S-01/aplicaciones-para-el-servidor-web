import { PartialType } from '@nestjs/mapped-types';
import { CreatePracticaDto } from './create-practica.dto';
import { IsString } from 'class-validator';

export class UpdatePracticaDto extends PartialType(CreatePracticaDto) {
    @IsString()
    id: string;
}
