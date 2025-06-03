import { TipoMetricaEntity } from "../../../domain/entities/tipo-metrica.entity";
import { TipoMetricaSequelize } from "../models/tipo-metrica.model";

export class TipoMetricaMapper {
  static fromSequelizeToEntity(sequelize: TipoMetricaSequelize): TipoMetricaEntity {
    return new TipoMetricaEntity(
      sequelize.id,
      sequelize.nombre,
      sequelize.descripcion,
      sequelize.activo,
      sequelize.createdAt,
      sequelize.updatedAt
    );
  }

  static fromEntityToSequelize(entity: TipoMetricaEntity): Partial<TipoMetricaSequelize> {
    return {
      id: entity.id,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      activo: entity.activo,
    };
  }
}
