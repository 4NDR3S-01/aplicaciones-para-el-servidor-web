import { Request, Response } from 'express';
import { CreateFlashcardDto, UpdateFlashcardDto } from '../../domain/dtos';
import { 
  CreateFlashcard, 
  DeleteFlashcard, 
  GetFlashcard, 
  GetFlashcards, 
  GetFlashcardsByCategory,
  GetCategories,
  UpdateFlashcard,
  FlashcardRepository 
} from '../../domain';

/**
 * PARÁMETRO 4: Controlador del servicio principal (flashcards)
 * Este controlador maneja las operaciones REST del servicio principal,
 * el cual puede consumir servicios auxiliares a través del sistema de rutas unificado.
 */
export class FlashcardsController {

  constructor(
    private readonly flashcardRepository: FlashcardRepository,
  ) {}

  public getFlashcards = (req: Request, res: Response) => {
    const { category } = req.query;

    if (category) {
      new GetFlashcardsByCategory(this.flashcardRepository)
        .execute(category as string)
        .then(flashcards => res.json(flashcards))
        .catch(error => res.status(400).json({ error }));
    } else {
      new GetFlashcards(this.flashcardRepository)
        .execute()
        .then(flashcards => res.json(flashcards))
        .catch(error => res.status(400).json({ error }));
    }
  };

  public getFlashcardById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetFlashcard(this.flashcardRepository)
      .execute(id)
      .then(flashcard => res.json(flashcard))
      .catch(error => res.status(400).json({ error }));
  };

  public createFlashcard = (req: Request, res: Response) => {
    const [error, createFlashcardDto] = CreateFlashcardDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateFlashcard(this.flashcardRepository)
      .execute(createFlashcardDto!)
      .then(flashcard => res.status(201).json(flashcard))
      .catch(error => res.status(400).json({ error }));
  };

  public updateFlashcard = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateFlashcardDto] = UpdateFlashcardDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });

    new UpdateFlashcard(this.flashcardRepository)
      .execute(updateFlashcardDto!)
      .then(flashcard => res.json(flashcard))
      .catch(error => res.status(400).json({ error }));
  };

  public deleteFlashcard = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteFlashcard(this.flashcardRepository)
      .execute(id)
      .then(flashcard => res.json(flashcard))
      .catch(error => res.status(400).json({ error }));
  };

  public getCategories = (req: Request, res: Response) => {
    new GetCategories(this.flashcardRepository)
      .execute()
      .then(categories => res.json(categories))
      .catch(error => res.status(400).json({ error }));
  };
}
