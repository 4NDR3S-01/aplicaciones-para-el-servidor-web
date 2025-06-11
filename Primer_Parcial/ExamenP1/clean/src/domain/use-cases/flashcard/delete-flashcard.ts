import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface DeleteFlashcardUseCase {
  execute(id: number): Promise<FlashcardEntity>;
}

export class DeleteFlashcard implements DeleteFlashcardUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(id: number): Promise<FlashcardEntity> {
    return this.repository.deleteById(id);
  }
}
