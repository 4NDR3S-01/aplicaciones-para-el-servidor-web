import { GrabacionEntity } from '../../entities/grabacion.entity';
import { GrabacionRepository } from '../../repositories/grabacion.repository';

export interface GetGrabacionUseCase {
  execute(id: number): Promise<GrabacionEntity>;
}

export class GetGrabacion implements GetGrabacionUseCase {
  constructor(
    private readonly repository: GrabacionRepository,
  ) {}

  execute(id: number): Promise<GrabacionEntity> {
    return this.repository.findById(id);
  }
}
