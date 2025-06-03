import { GrabacionEntity } from '../../entities/grabacion.entity';
import { GrabacionRepository } from '../../repositories/grabacion.repository';

export interface DeleteGrabacionUseCase {
  execute(id: number): Promise<GrabacionEntity>;
}

export class DeleteGrabacion implements DeleteGrabacionUseCase {
  constructor(
    private readonly repository: GrabacionRepository,
  ) {}

  execute(id: number): Promise<GrabacionEntity> {
    return this.repository.deleteById(id);
  }
}
