import { DataTypes, Model, Sequelize } from 'sequelize';

export interface GrabacionAttributes {
  id?: number;
  nombreArchivo: string;
  rutaArchivo: string;
  duracion?: number;
  formato?: string;
  fechaGrabacion?: Date;
  tamanioArchivo?: number;
  procesado: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class GrabacionSequelize extends Model<GrabacionAttributes> implements GrabacionAttributes {
  public id!: number;
  public nombreArchivo!: string;
  public rutaArchivo!: string;
  public duracion?: number;
  public formato?: string;
  public fechaGrabacion?: Date;
  public tamanioArchivo?: number;
  public procesado!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Asociaciones
  public static associate() {
    // Se definirán las asociaciones aquí
  }

  public static initModel(sequelize: Sequelize): typeof GrabacionSequelize {
    GrabacionSequelize.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombreArchivo: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: 'nombre_archivo',
        },
        rutaArchivo: {
          type: DataTypes.STRING(500),
          allowNull: false,
          field: 'ruta_archivo',
        },
        duracion: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
        },
        formato: {
          type: DataTypes.STRING(20),
          allowNull: true,
        },
        fechaGrabacion: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'fecha_grabacion',
        },
        tamanioArchivo: {
          type: DataTypes.BIGINT,
          allowNull: true,
          field: 'tamanio_archivo',
        },
        procesado: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: 'grabaciones',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
    );

    return GrabacionSequelize;
  }
}
