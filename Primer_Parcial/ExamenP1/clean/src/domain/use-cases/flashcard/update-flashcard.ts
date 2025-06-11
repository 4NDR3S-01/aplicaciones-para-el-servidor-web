import { UpdateFlashcardDto } from '../../dtos';
import { FlashcardEntity } from '../../entities/flashcard.entity';
import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface UpdateFlashcardUseCase {
  execute(dto: UpdateFlashcardDto): Promise<FlashcardEntity>;
}

export class UpdateFlashcard implements UpdateFlashcardUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(dto: UpdateFlashcardDto): Promise<FlashcardEntity> {
    return this.repository.updateById(dto);
  }
}
