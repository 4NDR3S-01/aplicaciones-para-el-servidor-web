import { Router } from 'express';
import { GrabacionController } from '../controllers/grabacion.controller';
import { CreateGrabacion, DeleteGrabacion, GetGrabacion, GetGrabaciones, UpdateGrabacion } from '../../domain/use-cases/grabacion';
import { DependencyFactory } from '../../config/dependencies';

export class GrabacionRoutes {
  static get routes(): Router {
    const router = Router();

    const grabacionRepository = DependencyFactory.getGrabacionRepository();
    
    const grabacionController = new GrabacionController(
      new CreateGrabacion(grabacionRepository),
      new GetGrabaciones(grabacionRepository),
      new GetGrabacion(grabacionRepository),
      new UpdateGrabacion(grabacionRepository),
      new DeleteGrabacion(grabacionRepository),
    );

    router.post('/', grabacionController.createGrabacion);
    router.get('/', grabacionController.getGrabaciones);
    router.get('/:id', grabacionController.getGrabacionById);
    router.put('/:id', grabacionController.updateGrabacion);
    router.delete('/:id', grabacionController.deleteGrabacion);

    return router;
  }
}
