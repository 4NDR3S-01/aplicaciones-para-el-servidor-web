import { CreateGrabacionDto, UpdateGrabacionDto } from '../dtos/grabacion';
import { GrabacionEntity } from '../entities/grabacion.entity';

export abstract class GrabacionRepository {
  abstract create(createGrabacionDto: CreateGrabacionDto): Promise<GrabacionEntity>;
  abstract getAll(): Promise<GrabacionEntity[]>;
  abstract findById(id: number): Promise<GrabacionEntity>;
  abstract updateById(updateGrabacionDto: UpdateGrabacionDto): Promise<GrabacionEntity>;
  abstract deleteById(id: number): Promise<GrabacionEntity>;
  abstract findByProcessed(processed: boolean): Promise<GrabacionEntity[]>;
  abstract findByFormat(format: string): Promise<GrabacionEntity[]>;
}
