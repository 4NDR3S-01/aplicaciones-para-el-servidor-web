import { CreateTipoMetricaDto, UpdateTipoMetricaDto } from '../dtos/tipo-metrica';
import { TipoMetricaEntity } from '../entities/tipo-metrica.entity';

export abstract class TipoMetricaDatasource {
  abstract create(createTipoMetricaDto: CreateTipoMetricaDto): Promise<TipoMetricaEntity>;
  abstract getAll(): Promise<TipoMetricaEntity[]>;
  abstract findById(id: number): Promise<TipoMetricaEntity>;
  abstract updateById(updateTipoMetricaDto: UpdateTipoMetricaDto): Promise<TipoMetricaEntity>;
  abstract deleteById(id: number): Promise<TipoMetricaEntity>;
}
