import { DataTypes, Model, Sequelize } from 'sequelize';

export interface ParametroIdealAttributes {
  id?: number;
  metricaId: number;
  valorIdeal: number;
  toleranciaMinima: number;
  toleranciaMaxima: number;
  descripcion?: string;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ParametroIdealSequelize extends Model<ParametroIdealAttributes> implements ParametroIdealAttributes {
  public id!: number;
  public metricaId!: number;
  public valorIdeal!: number;
  public toleranciaMinima!: number;
  public toleranciaMaxima!: number;
  public descripcion?: string;
  public activo!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static associate() {
    // Se definirán las asociaciones aquí
  }

  public static initModel(sequelize: Sequelize): typeof ParametroIdealSequelize {
    ParametroIdealSequelize.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        metricaId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'metrica_id',
        },
        valorIdeal: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          field: 'valor_ideal',
        },
        toleranciaMinima: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          field: 'tolerancia_minima',
        },
        toleranciaMaxima: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          field: 'tolerancia_maxima',
        },
        descripcion: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: 'parametros_ideales',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
    );

    return ParametroIdealSequelize;
  }
}
