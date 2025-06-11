import { CreateFlashcardDto, UpdateFlashcardDto } from '../dtos';
import { FlashcardEntity } from '../entities/flashcard.entity';

export abstract class FlashcardRepository {

  abstract create(createFlashcardDto: CreateFlashcardDto): Promise<FlashcardEntity>;
  
  // TODO: paginación
  abstract getAll(): Promise<FlashcardEntity[]>;
  
  abstract findById(id: number): Promise<FlashcardEntity>;
  abstract updateById(updateFlashcardDto: UpdateFlashcardDto): Promise<FlashcardEntity>;
  abstract deleteById(id: number): Promise<FlashcardEntity>;
  
  // Métodos específicos para flashcards
  abstract findByCategory(category: string): Promise<FlashcardEntity[]>;
  abstract getAllCategories(): Promise<string[]>;
  abstract searchByText(text: string): Promise<FlashcardEntity[]>;
}
