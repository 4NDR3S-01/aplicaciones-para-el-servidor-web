import { Router } from 'express';
import { TipoMetricaController } from '../controllers/tipo-metrica.controller';
import { CreateTipoMetrica, DeleteTipoMetrica, GetTipoMetrica, GetTipoMetricas, UpdateTipoMetrica } from '../../domain/use-cases/tipo-metrica';
import { DependencyFactory } from '../../config/dependencies';

export class TipoMetricaRoutes {
  static get routes(): Router {
    const router = Router();

    const tipoMetricaRepository = DependencyFactory.getTipoMetricaRepository();
    
    const tipoMetricaController = new TipoMetricaController(
      new CreateTipoMetrica(tipoMetricaRepository),
      new GetTipoMetricas(tipoMetricaRepository),
      new GetTipoMetrica(tipoMetricaRepository),
      new UpdateTipoMetrica(tipoMetricaRepository),
      new DeleteTipoMetrica(tipoMetricaRepository),
    );

    router.post('/', tipoMetricaController.createTipoMetrica);
    router.get('/', tipoMetricaController.getTipoMetricas);
    router.get('/:id', tipoMetricaController.getTipoMetricaById);
    router.put('/:id', tipoMetricaController.updateTipoMetrica);
    router.delete('/:id', tipoMetricaController.deleteTipoMetrica);

    return router;
  }
}
