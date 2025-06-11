import { FlashcardRepository } from '../../repositories/flashcard.repository';

export interface GetCategoriesUseCase {
  execute(): Promise<string[]>;
}

export class GetCategories implements GetCategoriesUseCase {
  
  constructor(
    private readonly repository: FlashcardRepository,
  ) {}
  
  execute(): Promise<string[]> {
    return this.repository.getAllCategories();
  }
}
