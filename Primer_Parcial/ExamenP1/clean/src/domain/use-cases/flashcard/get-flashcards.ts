import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface GetFlashcardsUseCase {
  execute(): Promise<FlashcardEntity[]>;
}

export class GetFlashcards implements GetFlashcardsUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(): Promise<FlashcardEntity[]> {
    return this.repository.getAll();
  }
}
