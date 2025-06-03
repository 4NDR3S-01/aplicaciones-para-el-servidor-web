import { GrabacionEntity } from '../../entities/grabacion.entity';
import { GrabacionRepository } from '../../repositories/grabacion.repository';

export interface GetGrabacionesUseCase {
  execute(): Promise<GrabacionEntity[]>;
}

export class GetGrabaciones implements GetGrabacionesUseCase {
  constructor(
    private readonly repository: GrabacionRepository,
  ) {}

  execute(): Promise<GrabacionEntity[]> {
    return this.repository.getAll();
  }
}
