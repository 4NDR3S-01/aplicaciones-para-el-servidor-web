import { PartialType } from '@nestjs/mapped-types';
import { CreateParametrosIdealeDto } from './create-parametros-ideale.dto';

export class UpdateParametrosIdealeDto extends PartialType(CreateParametrosIdealeDto) {
  id: number;
}
