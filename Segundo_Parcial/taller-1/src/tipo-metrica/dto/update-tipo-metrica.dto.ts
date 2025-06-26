import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoMetricaDto } from './create-tipo-metrica.dto';

export class UpdateTipoMetricaDto extends PartialType(CreateTipoMetricaDto) {}