import { GrabacionEntity } from '../../../domain/entities/grabacion.entity';
import { GrabacionTypeORM } from '../entities/grabacion.typeorm';

export class GrabacionMapper {
  static fromTypeOrmToEntity(typeormGrabacion: GrabacionTypeORM): GrabacionEntity {
    return new GrabacionEntity(
      typeormGrabacion.id,
      typeormGrabacion.nombreArchivo,
      typeormGrabacion.rutaArchivo,
      typeormGrabacion.duracion,
      typeormGrabacion.formato,
      typeormGrabacion.fechaGrabacion,
      typeormGrabacion.tamanioArchivo,
      typeormGrabacion.procesado,
      typeormGrabacion.createdAt,
      typeormGrabacion.updatedAt
    );
  }

  static fromEntityToTypeOrm(entity: GrabacionEntity): Partial<GrabacionTypeORM> {
    return {
      id: entity.id,
      nombreArchivo: entity.nombreArchivo,
      rutaArchivo: entity.rutaArchivo,
      duracion: entity.duracion,
      formato: entity.formato,
      fechaGrabacion: entity.fechaGrabacion,
      tamanioArchivo: entity.tamanioArchivo,
      procesado: entity.procesado,
    };
  }
}
