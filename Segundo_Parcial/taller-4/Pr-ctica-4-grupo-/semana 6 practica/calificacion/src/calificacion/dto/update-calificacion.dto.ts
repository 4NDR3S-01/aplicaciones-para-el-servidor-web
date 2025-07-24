import { PartialType } from '@nestjs/mapped-types';
import { CreateCalificacionDto } from './create-calificacion.dto';
import { IsString } from 'class-validator';

export class UpdateCalificacionDto extends PartialType(CreateCalificacionDto) {
    @IsString()
    id: string;
}
