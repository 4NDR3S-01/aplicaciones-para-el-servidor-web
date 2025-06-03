import { GrabacionDatasource } from '../../domain/datasources/grabacion.datasource';
import { CreateGrabacionDto, UpdateGrabacionDto } from '../../domain/dtos/grabacion';
import { GrabacionEntity } from '../../domain/entities/grabacion.entity';
import { GrabacionRepository } from '../../domain/repositories/grabacion.repository';

export class GrabacionRepositoryImpl implements GrabacionRepository {
  constructor(
    private readonly datasource: GrabacionDatasource,
  ) {}

  create(createGrabacionDto: CreateGrabacionDto): Promise<GrabacionEntity> {
    return this.datasource.create(createGrabacionDto);
  }

  getAll(): Promise<GrabacionEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<GrabacionEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateGrabacionDto: UpdateGrabacionDto): Promise<GrabacionEntity> {
    return this.datasource.updateById(updateGrabacionDto);
  }

  deleteById(id: number): Promise<GrabacionEntity> {
    return this.datasource.deleteById(id);
  }

  findByProcessed(processed: boolean): Promise<GrabacionEntity[]> {
    return this.datasource.findByProcessed(processed);
  }

  findByFormat(format: string): Promise<GrabacionEntity[]> {
    return this.datasource.findByFormat(format);
  }
}
