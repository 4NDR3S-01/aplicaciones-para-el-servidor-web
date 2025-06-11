import { Router, Request, Response } from 'express';
import { TodoRoutes } from './todos/routes';
import { TodoMemoryRoutes } from './todos/routes.memory';
import { FlashcardRoutes } from './flashcards/routes.memory';
import { DatasourceConfig, DatasourceType } from '../infrastructure/datasource/datasource.config';

/**
 * PARÁMETRO 4: Capa para consumo de servicios REST vinculada con servicio aislado
 * Esta clase implementa la integración entre el servicio principal (flashcards) 
 * y el servicio auxiliar (todos), permitiendo el consumo conjunto de ambos servicios.
 */
export class AppRoutes {

  static get routes(): Router {

    const router = Router();

    // PARÁMETRO 4: Integración de servicios - Servicio principal (flashcards)
    router.use('/api/flashcards', FlashcardRoutes.routes );
    
    // PARÁMETRO 4: Integración de servicios - Servicio auxiliar aislado (todos)
    router.use('/api/todos-memory', TodoMemoryRoutes.routes );
    
    // PARÁMETRO 4: Capa de consumo unificada - El servicio principal consume servicios auxiliares
    router.use('/api/todos', TodoRoutes.routes );
    
    // Endpoint de sistema para gestión de datasource
    router.get('/api/system/info', (req: Request, res: Response) => {
      res.json({
        message: 'Clean Architecture Todo API',
        version: '1.0.0',
        currentDatasource: DatasourceConfig.getCurrentDatasourceType(),
        availableDatasources: Object.values(DatasourceType),
        endpoints: {
          unified: '/api/todos (uses configured datasource)',
          memory: '/api/todos-memory (always uses memory)',
          flashcards: '/api/flashcards (memory-based flashcard system)',
          system: '/api/system/info'
        },
        environment: {
          NODE_ENV: process.env.NODE_ENV ?? 'development',
          DATASOURCE_TYPE: process.env.DATASOURCE_TYPE ?? 'MEMORY'
        }
      });
    });

    // Endpoint para cambiar datasource en tiempo de ejecución (solo para desarrollo)
    router.post('/api/system/datasource', (req: Request, res: Response) => {
      try {
        const { type } = req.body;
        
        if (!type || !Object.values(DatasourceType).includes(type)) {
          return res.status(400).json({
            error: 'Invalid datasource type',
            availableTypes: Object.values(DatasourceType)
          });
        }

        const previousType = DatasourceConfig.getCurrentDatasourceType();
        DatasourceConfig.setDatasource(type);
        
        res.json({
          message: 'Datasource changed successfully',
          previousType,
          newType: DatasourceConfig.getCurrentDatasourceType(),
          note: 'This change affects /api/todos endpoints. /api/todos-memory always uses memory datasource.'
        });
      } catch (error) {
        res.status(500).json({
          error: 'Failed to change datasource',
          details: error
        });
      }
    });
    



    return router;
  }


}

