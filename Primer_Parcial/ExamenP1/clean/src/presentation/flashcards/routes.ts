import { Router } from 'express';
import { FlashcardsController } from './controller';
import { FlashcardMemoryDatasource } from '../../infrastructure/datasource/flashcard.memory.datasource.impl';
import { FlashcardRepositoryImpl } from '../../infrastructure/repositories/flashcard.repository.impl';

export class FlashcardRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new FlashcardMemoryDatasource();
    const flashcardRepository = new FlashcardRepositoryImpl( datasource );
    const flashcardsController = new FlashcardsController( flashcardRepository );

    router.get('/', flashcardsController.getFlashcards );
    router.get('/categories', flashcardsController.getCategories );
    router.get('/:id', flashcardsController.getFlashcardById );
    
    router.post('/', flashcardsController.createFlashcard );
    router.put('/:id', flashcardsController.updateFlashcard );
    router.delete('/:id', flashcardsController.deleteFlashcard );

    return router;
  }
}
