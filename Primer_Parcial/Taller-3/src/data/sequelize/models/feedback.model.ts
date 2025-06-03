import { DataTypes, Model, Sequelize } from 'sequelize';

export interface FeedbackAttributes {
  id?: number;
  grabacionId: number;
  parametroIdealId: number;
  valorObtenido: number;
  puntuacion: number;
  comentario?: string;
  esManual: boolean;
  fechaAnalisis?: Date;
  confiabilidad?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export class FeedbackSequelize extends Model<FeedbackAttributes> implements FeedbackAttributes {
  public id!: number;
  public grabacionId!: number;
  public parametroIdealId!: number;
  public valorObtenido!: number;
  public puntuacion!: number;
  public comentario?: string;
  public esManual!: boolean;
  public fechaAnalisis?: Date;
  public confiabilidad?: number;
  public createdAt!: Date;
  public updatedAt!: Date;

  public static associate() {
    // Se definirán las asociaciones aquí
  }

  public static initModel(sequelize: Sequelize): typeof FeedbackSequelize {
    FeedbackSequelize.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        grabacionId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'grabacion_id',
        },
        parametroIdealId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'parametro_ideal_id',
        },
        valorObtenido: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
          field: 'valor_obtenido',
        },
        puntuacion: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false,
        },
        comentario: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        esManual: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
          field: 'es_manual',
        },
        fechaAnalisis: {
          type: DataTypes.DATE,
          allowNull: true,
          field: 'fecha_analisis',
        },
        confiabilidad: {
          type: DataTypes.DECIMAL(3, 2),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'feedbacks',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      }
    );

    return FeedbackSequelize;
  }
}
