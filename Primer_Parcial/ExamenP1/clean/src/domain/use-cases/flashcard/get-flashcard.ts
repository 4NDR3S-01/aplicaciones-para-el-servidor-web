import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface GetFlashcardUseCase {
  execute(id: number): Promise<FlashcardEntity>;
}

export class GetFlashcard implements GetFlashcardUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(id: number): Promise<FlashcardEntity> {
    return this.repository.findById(id);
  }
}
