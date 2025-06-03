import { DataTypes, Model, Sequelize } from 'sequelize';

export interface MetricaAttributes {
  id?: number;
  nombre: string;
  descripcion: string;
  tipoMetricaId: number;
  unidadMedida: string;
  valorMinimo?: number;
  valorMaximo?: number;
  activo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class MetricaSequelize extends Model<MetricaAttributes> implements MetricaAttributes {
  public id!: number;
  public nombre!: string;
  public descripcion!: string;
  public tipoMetricaId!: number;
  public unidadMedida!: string;
  public valorMinimo?: number;
  public valorMaximo?: number;
  public activo!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static associate() {
    // Se definirán las asociaciones aquí
  }

  public static initModel(sequelize: Sequelize): typeof MetricaSequelize {
    MetricaSequelize.init(
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
        tipoMetricaId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'tipo_metrica_id',
        },
        unidadMedida: {
          type: DataTypes.STRING(50),
          allowNull: false,
          field: 'unidad_medida',
        },
        valorMinimo: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
          field: 'valor_minimo',
        },
        valorMaximo: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
          field: 'valor_maximo',
        },
        activo: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: 'metricas',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
    );

    return MetricaSequelize;
  }
}
