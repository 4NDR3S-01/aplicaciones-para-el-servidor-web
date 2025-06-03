import { TipoMetricaEntity } from "../../entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../repositories/tipo-metrica.repository";
import { UpdateTipoMetricaDto } from "../../dtos/tipo-metrica/update-tipo-metrica.dto";

export interface UpdateTipoMetricaUseCase {
  execute(dto: UpdateTipoMetricaDto): Promise<TipoMetricaEntity>;
}

export class UpdateTipoMetrica implements UpdateTipoMetricaUseCase {
  constructor(private readonly repository: TipoMetricaRepository) {}

  async execute(dto: UpdateTipoMetricaDto): Promise<TipoMetricaEntity> {
    return await this.repository.updateById(dto);
  }
}
