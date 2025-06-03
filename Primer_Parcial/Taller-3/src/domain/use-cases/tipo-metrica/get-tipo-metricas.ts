import { TipoMetricaEntity } from "../../entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../repositories/tipo-metrica.repository";

export interface GetTipoMetricasUseCase {
  execute(): Promise<TipoMetricaEntity[]>;
}

export class GetTipoMetricas implements GetTipoMetricasUseCase {
  constructor(private readonly repository: TipoMetricaRepository) {}

  async execute(): Promise<TipoMetricaEntity[]> {
    return await this.repository.getAll();
  }
}
