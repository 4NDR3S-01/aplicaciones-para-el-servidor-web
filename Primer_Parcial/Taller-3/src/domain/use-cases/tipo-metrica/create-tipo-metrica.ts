import { TipoMetricaEntity } from "../../entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../repositories/tipo-metrica.repository";
import { CreateTipoMetricaDto } from "../../dtos/tipo-metrica/create-tipo-metrica.dto";

export interface CreateTipoMetricaUseCase {
  execute(dto: CreateTipoMetricaDto): Promise<TipoMetricaEntity>;
}

export class CreateTipoMetrica implements CreateTipoMetricaUseCase {
  constructor(private readonly repository: TipoMetricaRepository) {}

  async execute(dto: CreateTipoMetricaDto): Promise<TipoMetricaEntity> {
    return await this.repository.create(dto);
  }
}
