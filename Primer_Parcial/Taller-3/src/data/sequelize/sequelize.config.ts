import { Sequelize } from 'sequelize';
import { envs } from '../../config/envs';

// Models
import { TipoMetricaSequelize } from './models/tipo-metrica.model';
import { MetricaSequelize } from './models/metrica.model';
import { ParametroIdealSequelize } from './models/parametro-ideal.model';
import { GrabacionSequelize } from './models/grabacion.model';
import { FeedbackSequelize } from './models/feedback.model';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: envs.SQLITE_DB_PATH,
  logging: envs.NODE_ENV === 'development' ? console.log : false,
});

// Inicializar modelos
const initModels = () => {
  TipoMetricaSequelize.initModel(sequelize);
  MetricaSequelize.initModel(sequelize);
  ParametroIdealSequelize.initModel(sequelize);
  GrabacionSequelize.initModel(sequelize);
  FeedbackSequelize.initModel(sequelize);

  // Definir asociaciones
  TipoMetricaSequelize.associate();
  MetricaSequelize.associate();
  ParametroIdealSequelize.associate();
  GrabacionSequelize.associate();
  FeedbackSequelize.associate();
};

export const initializeSequelize = async (): Promise<void> => {
  try {
    initModels();
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // force: true recreará las tablas
    console.log('✅ Sequelize: Conexión de base de datos inicializada exitosamente');
  } catch (error) {
    console.error('❌ Error durante la inicialización de base de datos Sequelize:', error);
    throw error;
  }
};

export { 
  TipoMetricaSequelize,
  MetricaSequelize,
  ParametroIdealSequelize,
  GrabacionSequelize,
  FeedbackSequelize 
};
