import { UpdateGrabacionDto } from '../../dtos/grabacion';
import { GrabacionEntity } from '../../entities/grabacion.entity';
import { GrabacionRepository } from '../../repositories/grabacion.repository';

export interface UpdateGrabacionUseCase {
  execute(dto: UpdateGrabacionDto): Promise<GrabacionEntity>;
}

export class UpdateGrabacion implements UpdateGrabacionUseCase {
  constructor(
    private readonly repository: GrabacionRepository,
  ) {}

  execute(dto: UpdateGrabacionDto): Promise<GrabacionEntity> {
    return this.repository.updateById(dto);
  }
}
