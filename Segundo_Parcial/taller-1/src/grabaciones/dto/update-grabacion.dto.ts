import { PartialType } from '@nestjs/mapped-types';
import { CreateGrabacionDto } from './create-grabacion.dto';

export class UpdateGrabacionDto extends PartialType(CreateGrabacionDto) {} 