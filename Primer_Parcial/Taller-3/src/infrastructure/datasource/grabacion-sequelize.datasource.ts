import { GrabacionDatasource } from '../../domain/datasources/grabacion.datasource';
import { CreateGrabacionDto, UpdateGrabacionDto } from '../../domain/dtos/grabacion';
import { GrabacionEntity } from '../../domain/entities/grabacion.entity';
import { GrabacionSequelize } from '../../data/sequelize/models/grabacion.model';

export class GrabacionSequelizeDatasource implements GrabacionDatasource {
  async create(createGrabacionDto: CreateGrabacionDto): Promise<GrabacionEntity> {
    const grabacion = await GrabacionSequelize.create({
      nombreArchivo: createGrabacionDto.nombreArchivo,
      rutaArchivo: createGrabacionDto.rutaArchivo,
      duracion: createGrabacionDto.duracion,
      formato: createGrabacionDto.formato,
      fechaGrabacion: createGrabacionDto.fechaGrabacion,
      tamanioArchivo: createGrabacionDto.tamanioArchivo,
      procesado: false,
    });

    return this.mapToEntity(grabacion);
  }

  async getAll(): Promise<GrabacionEntity[]> {
    const grabaciones = await GrabacionSequelize.findAll();
    return grabaciones.map(this.mapToEntity);
  }

  async findById(id: number): Promise<GrabacionEntity> {
    const grabacion = await GrabacionSequelize.findByPk(id);
    if (!grabacion) throw `Grabación with id ${id} not found`;
    return this.mapToEntity(grabacion);
  }

  async updateById(updateGrabacionDto: UpdateGrabacionDto): Promise<GrabacionEntity> {
    const grabacion = await GrabacionSequelize.findByPk(updateGrabacionDto.id);
    if (!grabacion) throw `Grabación with id ${updateGrabacionDto.id} not found`;

    await grabacion.update(updateGrabacionDto.values);
    return this.mapToEntity(grabacion);
  }

  async deleteById(id: number): Promise<GrabacionEntity> {
    const grabacion = await GrabacionSequelize.findByPk(id);
    if (!grabacion) throw `Grabación with id ${id} not found`;

    const entityToReturn = this.mapToEntity(grabacion);
    await grabacion.destroy();
    return entityToReturn;
  }

  async findByProcessed(processed: boolean): Promise<GrabacionEntity[]> {
    const grabaciones = await GrabacionSequelize.findAll({
      where: { procesado: processed },
    });
    return grabaciones.map(this.mapToEntity);
  }

  async findByFormat(format: string): Promise<GrabacionEntity[]> {
    const grabaciones = await GrabacionSequelize.findAll({
      where: { formato: format },
    });
    return grabaciones.map(this.mapToEntity);
  }

  private mapToEntity(sequelizeGrabacion: GrabacionSequelize): GrabacionEntity {
    return new GrabacionEntity(
      sequelizeGrabacion.id,
      sequelizeGrabacion.nombreArchivo,
      sequelizeGrabacion.rutaArchivo,
      sequelizeGrabacion.duracion,
      sequelizeGrabacion.formato,
      sequelizeGrabacion.fechaGrabacion,
      sequelizeGrabacion.tamanioArchivo,
      sequelizeGrabacion.procesado,
      sequelizeGrabacion.createdAt,
      sequelizeGrabacion.updatedAt
    );
  }
}
