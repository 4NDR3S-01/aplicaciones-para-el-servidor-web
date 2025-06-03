import { Repository } from 'typeorm';
import { AppDataSource } from '../../data/typeorm/typeorm.config';
import { GrabacionDatasource } from '../../domain/datasources/grabacion.datasource';
import { CreateGrabacionDto, UpdateGrabacionDto } from '../../domain/dtos/grabacion';
import { GrabacionEntity } from '../../domain/entities/grabacion.entity';
import { GrabacionTypeORM } from '../../data/typeorm/entities/grabacion.typeorm';
import { GrabacionMapper } from '../../data/typeorm/mappers/grabacion.mapper';

export class GrabacionTypeORMDatasource implements GrabacionDatasource {
  private repository: Repository<GrabacionTypeORM>;

  constructor() {
    this.repository = AppDataSource.getRepository(GrabacionTypeORM);
  }

  async create(createGrabacionDto: CreateGrabacionDto): Promise<GrabacionEntity> {
    const grabacion = new GrabacionTypeORM();
    grabacion.nombreArchivo = createGrabacionDto.nombreArchivo;
    grabacion.rutaArchivo = createGrabacionDto.rutaArchivo;
    if (createGrabacionDto.duracion !== undefined) grabacion.duracion = createGrabacionDto.duracion;
    if (createGrabacionDto.formato) grabacion.formato = createGrabacionDto.formato;
    if (createGrabacionDto.fechaGrabacion) grabacion.fechaGrabacion = createGrabacionDto.fechaGrabacion;
    if (createGrabacionDto.tamanioArchivo !== undefined) grabacion.tamanioArchivo = createGrabacionDto.tamanioArchivo;

    const savedGrabacion = await this.repository.save(grabacion);
    return GrabacionMapper.fromTypeOrmToEntity(savedGrabacion);
  }

  async getAll(): Promise<GrabacionEntity[]> {
    const grabaciones = await this.repository.find();
    return grabaciones.map(GrabacionMapper.fromTypeOrmToEntity);
  }

  async findById(id: number): Promise<GrabacionEntity> {
    const grabacion = await this.repository.findOneBy({ id });
    if (!grabacion) throw `Grabación with id ${id} not found`;
    return GrabacionMapper.fromTypeOrmToEntity(grabacion);
  }

  async updateById(updateGrabacionDto: UpdateGrabacionDto): Promise<GrabacionEntity> {
    const grabacion = await this.repository.findOneBy({ id: updateGrabacionDto.id });
    if (!grabacion) throw `Grabación with id ${updateGrabacionDto.id} not found`;

    // Actualizar solo los campos que vienen en el DTO
    Object.assign(grabacion, updateGrabacionDto.values);

    const updatedGrabacion = await this.repository.save(grabacion);
    return GrabacionMapper.fromTypeOrmToEntity(updatedGrabacion);
  }

  async deleteById(id: number): Promise<GrabacionEntity> {
    const grabacion = await this.repository.findOneBy({ id });
    if (!grabacion) throw `Grabación with id ${id} not found`;

    await this.repository.remove(grabacion);
    return GrabacionMapper.fromTypeOrmToEntity(grabacion);
  }

  async findByProcessed(processed: boolean): Promise<GrabacionEntity[]> {
    const grabaciones = await this.repository.findBy({ procesado: processed });
    return grabaciones.map(GrabacionMapper.fromTypeOrmToEntity);
  }

  async findByFormat(format: string): Promise<GrabacionEntity[]> {
    const grabaciones = await this.repository.findBy({ formato: format });
    return grabaciones.map(GrabacionMapper.fromTypeOrmToEntity);
  }
}
