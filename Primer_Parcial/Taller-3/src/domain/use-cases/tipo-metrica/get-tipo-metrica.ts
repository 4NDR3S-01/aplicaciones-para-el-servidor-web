import { TipoMetricaEntity } from "../../entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../repositories/tipo-metrica.repository";

export interface GetTipoMetricaUseCase {
  execute(id: number): Promise<TipoMetricaEntity>;
}

export class GetTipoMetrica implements GetTipoMetricaUseCase {
  constructor(private readonly repository: TipoMetricaRepository) {}

  async execute(id: number): Promise<TipoMetricaEntity> {
    return await this.repository.findById(id);
  }
}
