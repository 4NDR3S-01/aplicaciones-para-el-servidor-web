import { Router } from 'express';
import { TodosMemoryController } from './controller.memory';

/**
 * PARÁMETRO 3: Servicio REST auxiliar - Configuración de rutas
 * Define las rutas REST del servicio auxiliar de TODOs que complementa
 * al servicio principal de flashcards.
 */
export class TodoMemoryRoutes {

  static get routes(): Router {

    const router = Router();
    const todoController = new TodosMemoryController();

    // PARÁMETRO 3: Rutas CRUD del servicio auxiliar (arquitectura 2 capas)
    router.get('/', todoController.getTodos);
    router.get('/:id', todoController.getTodoById);
    router.post('/', todoController.createTodo);
    router.put('/:id', todoController.updateTodo);
    router.delete('/:id', todoController.deleteTodo);

    // Rutas específicas para gestión de datos en memoria
    router.get('/memory/stats', todoController.getStats);
    router.get('/memory/export', todoController.exportData);
    router.get('/memory/raw', todoController.getRawData);
    router.post('/memory/import', todoController.importData);
    router.post('/memory/reset', todoController.resetToSampleData);
    router.delete('/memory/clear', todoController.clearData);

    return router;
  }

} 