import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface GetFlashcardsByCategoryUseCase {
  execute(category: string): Promise<FlashcardEntity[]>;
}

export class GetFlashcardsByCategory implements GetFlashcardsByCategoryUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(category: string): Promise<FlashcardEntity[]> {
    return this.repository.findByCategory(category);
  }
}
