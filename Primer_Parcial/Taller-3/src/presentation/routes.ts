import { Router } from 'express';
import { GrabacionRoutes } from './routes/grabacion.routes';
import { TipoMetricaRoutes } from './routes/tipo-metrica.routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    
    // Definir todas las rutas
    router.use('/api/v1/grabaciones', GrabacionRoutes.routes);
    router.use('/api/v1/tipos-metrica', TipoMetricaRoutes.routes);
    
    return router;
  }
}
