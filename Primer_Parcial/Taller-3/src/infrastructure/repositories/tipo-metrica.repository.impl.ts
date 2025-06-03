import { TipoMetricaEntity } from "../../domain/entities/tipo-metrica.entity";
import { TipoMetricaRepository } from "../../domain/repositories/tipo-metrica.repository";
import { TipoMetricaDatasource } from "../../domain/datasources/tipo-metrica.datasource";
import { CreateTipoMetricaDto, UpdateTipoMetricaDto } from "../../domain/dtos/tipo-metrica";

export class TipoMetricaRepositoryImpl implements TipoMetricaRepository {
  constructor(private readonly datasource: TipoMetricaDatasource) {}

  create(createTipoMetricaDto: CreateTipoMetricaDto): Promise<TipoMetricaEntity> {
    return this.datasource.create(createTipoMetricaDto);
  }

  getAll(): Promise<TipoMetricaEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<TipoMetricaEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateTipoMetricaDto: UpdateTipoMetricaDto): Promise<TipoMetricaEntity> {
    return this.datasource.updateById(updateTipoMetricaDto);
  }

  deleteById(id: number): Promise<TipoMetricaEntity> {
    return this.datasource.deleteById(id);
  }
}
