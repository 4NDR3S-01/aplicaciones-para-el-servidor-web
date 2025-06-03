import { TipoMetricaEntity } from "../../../domain/entities/tipo-metrica.entity";
import { TipoMetricaTypeORM } from "../entities/tipo-metrica.typeorm";

export class TipoMetricaMapper {
  static fromTypeOrmToEntity(typeorm: TipoMetricaTypeORM): TipoMetricaEntity {
    return new TipoMetricaEntity(
      typeorm.id,
      typeorm.nombre,
      typeorm.descripcion,
      typeorm.activo,
      typeorm.createdAt,
      typeorm.updatedAt
    );
  }

  static fromEntityToTypeOrm(entity: TipoMetricaEntity): Partial<TipoMetricaTypeORM> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      activo: entity.activo,
    };
  }
}
