import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
  
  // ORM Selection
  ORM_TYPE: get('ORM_TYPE').default('typeorm').asString(),
  
  // Base de datos PostgreSQL (TypeORM)
  DB_HOST: get('DB_HOST').default('localhost').asString(),
  DB_PORT: get('DB_PORT').default(5432).asPortNumber(),
  DB_USERNAME: get('DB_USERNAME').default('postgres').asString(),
  DB_PASSWORD: get('DB_PASSWORD').default('password').asString(),
  DB_NAME: get('DB_NAME').default('taller3_db').asString(),
  
  // Base de datos SQLite (Sequelize)
  SQLITE_DB_PATH: get('SQLITE_DB_PATH').default('./database.sqlite').asString(),
  
  // Configuración general
  NODE_ENV: get('NODE_ENV').default('development').asString(),
  API_PREFIX: get('API_PREFIX').default('/api/v1').asString(),
};
