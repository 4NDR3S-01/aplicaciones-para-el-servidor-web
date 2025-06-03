import { TipoMetricaEntity } from "../../entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../repositories/tipo-metrica.repository";

export interface DeleteTipoMetricaUseCase {
  execute(id: number): Promise<TipoMetricaEntity>;
}

export class DeleteTipoMetrica implements DeleteTipoMetricaUseCase {
  constructor(private readonly repository: TipoMetricaRepository) {}

  async execute(id: number): Promise<TipoMetricaEntity> {
    return await this.repository.deleteById(id);
  }
}
