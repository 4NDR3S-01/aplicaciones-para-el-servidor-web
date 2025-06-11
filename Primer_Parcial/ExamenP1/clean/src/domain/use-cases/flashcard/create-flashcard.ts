import { CreateFlashcardDto } from '../../dtos';
import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface CreateFlashcardUseCase {
  execute(dto: CreateFlashcardDto): Promise<FlashcardEntity>;
}

export class CreateFlashcard implements CreateFlashcardUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(dto: CreateFlashcardDto): Promise<FlashcardEntity> {
    return this.repository.create(dto);
  }
}
