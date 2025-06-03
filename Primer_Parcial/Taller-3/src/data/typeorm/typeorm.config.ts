import { DataSource } from 'typeorm';
import { envs } from '../../config/envs';

// TypeORM entities
import { TipoMetricaTypeORM } from './entities/tipo-metrica.typeorm';
import { MetricaTypeORM } from './entities/metrica.typeorm';
import { ParametroIdealTypeORM } from './entities/parametro-ideal.typeorm';
import { GrabacionTypeORM } from './entities/grabacion.typeorm';
import { FeedbackTypeORM } from './entities/feedback.typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: envs.DB_HOST,
  port: envs.DB_PORT,
  username: envs.DB_USERNAME,
  password: envs.DB_PASSWORD,
  database: envs.DB_NAME,
  synchronize: envs.NODE_ENV === 'development',
  logging: envs.NODE_ENV === 'development',
  entities: [
    TipoMetricaTypeORM,
    MetricaTypeORM,
    ParametroIdealTypeORM,
    GrabacionTypeORM,
    FeedbackTypeORM
  ],
  migrations: [],
  subscribers: [],
});

export const initializeTypeORM = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log('✅ TypeORM: Conexión de base de datos inicializada exitosamente');
  } catch (error) {
    console.error('❌ Error durante la inicialización de base de datos TypeORM:', error);
    throw error;
  }
};
