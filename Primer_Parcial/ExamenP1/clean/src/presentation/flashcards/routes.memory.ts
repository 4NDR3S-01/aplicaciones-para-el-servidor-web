import { Router } from 'express';
import { FlashcardsController } from './controller';
import { FlashcardMemoryDatasource } from '../../infrastructure/datasource/flashcard.memory.datasource.impl';
import { FlashcardRepositoryImpl } from '../../infrastructure/repositories/flashcard.repository.impl';

/**
 * PARÁMETRO 2: Rutas del servicio REST usando datasource JSON
 * Esta clase configura las rutas REST que operan sobre el datasource JSON
 */
export class FlashcardRoutes {

  static get routes(): Router {

    const router = Router();

    // PARÁMETRO 2: Inyección del datasource JSON
    const datasource = new FlashcardMemoryDatasource();
    const flashcardRepository = new FlashcardRepositoryImpl( datasource );
    const flashcardsController = new FlashcardsController( flashcardRepository );

    // PARÁMETRO 2: Implementación de rutas REST (mínimo 1 requerida, implementadas 7)
    router.get('/', flashcardsController.getFlashcards );           // GET todas las flashcards
    router.get('/categories', flashcardsController.getCategories ); // GET categorías
    router.get('/:id', flashcardsController.getFlashcardById );     // GET por ID
    
    router.post('/', flashcardsController.createFlashcard );        // POST crear flashcard
    router.put('/:id', flashcardsController.updateFlashcard );      // PUT actualizar
    router.delete('/:id', flashcardsController.deleteFlashcard );

    return router;
  }
}
