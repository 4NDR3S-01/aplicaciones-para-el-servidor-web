import { DataTypes, Model, Sequelize } from 'sequelize';

export interface TipoMetricaAttributes {
  id?: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class TipoMetricaSequelize extends Model<TipoMetricaAttributes> implements TipoMetricaAttributes {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public activo!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static associate() {
    // Se definirán las asociaciones aquí
  }

  public static initModel(sequelize: Sequelize): typeof TipoMetricaSequelize {
    TipoMetricaSequelize.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        descripcion: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: 'tipos_metrica',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
    );

    return TipoMetricaSequelize;
  }
}
