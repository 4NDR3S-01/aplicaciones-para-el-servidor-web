import { TipoMetricaEntity } from "../../domain/entities/tipo-metrica.entity";
import { TipoMetricaDatasource } from "../../domain/datasources/tipo-metrica.datasource";
import { TipoMetricaSequelize } from "../../data/sequelize/models/tipo-metrica.model";
import { TipoMetricaMapper } from "../../data/sequelize/mappers/tipo-metrica.mapper";

export class TipoMetricaSequelizeDatasource implements TipoMetricaDatasource {
  async create(createTipoMetricaDto: any): Promise<TipoMetricaEntity> {
    const newTipoMetrica = await TipoMetricaSequelize.create({
      nombre: createTipoMetricaDto.nombre,
      descripcion: createTipoMetricaDto.descripcion,
      activo: true,
    });

    return TipoMetricaMapper.fromSequelizeToEntity(newTipoMetrica);
  }

  async getAll(): Promise<TipoMetricaEntity[]> {
    const tipoMetricas = await TipoMetricaSequelize.findAll();
    return tipoMetricas.map(TipoMetricaMapper.fromSequelizeToEntity);
  }

  async findById(id: number): Promise<TipoMetricaEntity> {
    const tipoMetrica = await TipoMetricaSequelize.findByPk(id);
    if (!tipoMetrica) throw new Error(`TipoMetrica with id ${id} not found`);
    
    return TipoMetricaMapper.fromSequelizeToEntity(tipoMetrica);
  }

  async updateById(updateTipoMetricaDto: any): Promise<TipoMetricaEntity> {
    const [affectedRows] = await TipoMetricaSequelize.update(
      {
        nombre: updateTipoMetricaDto.nombre,
        descripcion: updateTipoMetricaDto.descripcion,
      },
      {
        where: { id: updateTipoMetricaDto.id },
        returning: true,
      }
    );

    if (affectedRows === 0) {
      throw new Error(`TipoMetrica with id ${updateTipoMetricaDto.id} not found`);
    }

    const updatedTipoMetrica = await TipoMetricaSequelize.findByPk(updateTipoMetricaDto.id);
    return TipoMetricaMapper.fromSequelizeToEntity(updatedTipoMetrica!);
  }

  async deleteById(id: number): Promise<TipoMetricaEntity> {
    const tipoMetrica = await TipoMetricaSequelize.findByPk(id);
    if (!tipoMetrica) throw new Error(`TipoMetrica with id ${id} not found`);
    
    await TipoMetricaSequelize.destroy({
      where: { id }
    });
    
    return TipoMetricaMapper.fromSequelizeToEntity(tipoMetrica);
  }
}
