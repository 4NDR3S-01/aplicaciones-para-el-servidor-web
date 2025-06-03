import { TipoMetricaEntity } from "../../domain/entities/tipo-metrica.entity";
import { TipoMetricaDatasource } from "../../domain/datasources/tipo-metrica.datasource";
import { TipoMetricaTypeORM } from "../../data/typeorm/entities/tipo-metrica.typeorm";
import { TipoMetricaMapper } from "../../data/typeorm/mappers/tipo-metrica.mapper";
import { AppDataSource } from "../../data/typeorm/typeorm.config";

export class TipoMetricaTypeOrmDatasource implements TipoMetricaDatasource {
  async create(createTipoMetricaDto: any): Promise<TipoMetricaEntity> {
    const tipoMetricaRepository = AppDataSource.getRepository(TipoMetricaTypeORM);
    
    const newTipoMetrica = tipoMetricaRepository.create({
      nombre: createTipoMetricaDto.nombre,
      descripcion: createTipoMetricaDto.descripcion,
    });

    const savedTipoMetrica = await tipoMetricaRepository.save(newTipoMetrica);
    return TipoMetricaMapper.fromTypeOrmToEntity(savedTipoMetrica);
  }

  async getAll(): Promise<TipoMetricaEntity[]> {
    const tipoMetricaRepository = AppDataSource.getRepository(TipoMetricaTypeORM);
    const tipoMetricas = await tipoMetricaRepository.find();
    
    return tipoMetricas.map(TipoMetricaMapper.fromTypeOrmToEntity);
  }

  async findById(id: number): Promise<TipoMetricaEntity> {
    const tipoMetricaRepository = AppDataSource.getRepository(TipoMetricaTypeORM);
    const tipoMetrica = await tipoMetricaRepository.findOneBy({ id });

    if (!tipoMetrica) throw new Error(`TipoMetrica with id ${id} not found`);
    return TipoMetricaMapper.fromTypeOrmToEntity(tipoMetrica);
  }

  async updateById(updateTipoMetricaDto: any): Promise<TipoMetricaEntity> {
    const tipoMetricaRepository = AppDataSource.getRepository(TipoMetricaTypeORM);
    
    await tipoMetricaRepository.update(updateTipoMetricaDto.id, {
      nombre: updateTipoMetricaDto.nombre,
      descripcion: updateTipoMetricaDto.descripcion,
    });

    const updatedTipoMetrica = await tipoMetricaRepository.findOneBy({ id: updateTipoMetricaDto.id });
    if (!updatedTipoMetrica) throw new Error(`TipoMetrica with id ${updateTipoMetricaDto.id} not found`);
    
    return TipoMetricaMapper.fromTypeOrmToEntity(updatedTipoMetrica);
  }

  async deleteById(id: number): Promise<TipoMetricaEntity> {
    const tipoMetricaRepository = AppDataSource.getRepository(TipoMetricaTypeORM);
    const tipoMetrica = await tipoMetricaRepository.findOneBy({ id });
    
    if (!tipoMetrica) throw new Error(`TipoMetrica with id ${id} not found`);
    
    await tipoMetricaRepository.delete(id);
    return TipoMetricaMapper.fromTypeOrmToEntity(tipoMetrica);
  }
}
