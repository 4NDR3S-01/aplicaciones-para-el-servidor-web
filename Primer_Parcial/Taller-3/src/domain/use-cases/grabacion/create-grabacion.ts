import { CreateGrabacionDto } from '../../dtos/grabacion';
import { GrabacionEntity } from '../../entities/grabacion.entity';
import { GrabacionRepository } from '../../repositories/grabacion.repository';

export interface CreateGrabacionUseCase {
  execute(dto: CreateGrabacionDto): Promise<GrabacionEntity>;
}

export class CreateGrabacion implements CreateGrabacionUseCase {
  constructor(
    private readonly repository: GrabacionRepository,
  ) {}

  execute(dto: CreateGrabacionDto): Promise<GrabacionEntity> {
    return this.repository.create(dto);
  }
}
