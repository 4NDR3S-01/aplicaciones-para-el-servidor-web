import { PartialType } from '@nestjs/mapped-types';
import { CreateCalificacioneDto } from './create-calificacione.dto';

export class UpdateCalificacioneDto extends PartialType(CreateCalificacioneDto) {
  id: number;
}
