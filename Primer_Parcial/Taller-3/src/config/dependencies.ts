import { envs } from '../config/envs';

// Factory para Grabacion
import { GrabacionTypeORMDatasource } from '../infrastructure/datasource/grabacion-typeorm.datasource';
import { GrabacionSequelizeDatasource } from '../infrastructure/datasource/grabacion-sequelize.datasource';
import { GrabacionRepositoryImpl } from '../infrastructure/repositories/grabacion.repository.impl';

// Factory para TipoMetrica
import { TipoMetricaTypeOrmDatasource } from '../infrastructure/datasource/tipo-metrica-typeorm.datasource';
import { TipoMetricaSequelizeDatasource } from '../infrastructure/datasource/tipo-metrica-sequelize.datasource';
import { TipoMetricaRepositoryImpl } from '../infrastructure/repositories/tipo-metrica.repository.impl';

export class DependencyFactory {
  static getGrabacionRepository() {
    const ormType = envs.ORM_TYPE;
    
    if (ormType === 'typeorm') {
      const datasource = new GrabacionTypeORMDatasource();
      return new GrabacionRepositoryImpl(datasource);
    } else {
      const datasource = new GrabacionSequelizeDatasource();
      return new GrabacionRepositoryImpl(datasource);
    }
  }

  static getTipoMetricaRepository() {
    const ormType = envs.ORM_TYPE;
    
    if (ormType === 'typeorm') {
      const datasource = new TipoMetricaTypeOrmDatasource();
      return new TipoMetricaRepositoryImpl(datasource);
    } else {
      const datasource = new TipoMetricaSequelizeDatasource();
      return new TipoMetricaRepositoryImpl(datasource);
    }
  }
}
