import { CreateFlashcardDto, UpdateFlashcardDto } from '../../domain/dtos';
import { FlashcardDatasource } from '../../domain/datasources/flashcard.datasource';
import { FlashcardEntity } from '../../domain/entities/flashcard.entity';
import { FlashcardRepository } from '../../domain/repositories/flashcard.repository';

export class FlashcardRepositoryImpl implements FlashcardRepository {

  constructor(
    private readonly datasource: FlashcardDatasource,
  ) {}

  create(createFlashcardDto: CreateFlashcardDto): Promise<FlashcardEntity> {
    return this.datasource.create(createFlashcardDto);
  }

  getAll(): Promise<FlashcardEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<FlashcardEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateFlashcardDto: UpdateFlashcardDto): Promise<FlashcardEntity> {
    return this.datasource.updateById(updateFlashcardDto);
  }

  deleteById(id: number): Promise<FlashcardEntity> {
    return this.datasource.deleteById(id);
  }

  findByCategory(category: string): Promise<FlashcardEntity[]> {
    return this.datasource.findByCategory(category);
  }

  getAllCategories(): Promise<string[]> {
    return this.datasource.getAllCategories();
  }

  searchByText(text: string): Promise<FlashcardEntity[]> {
    return this.datasource.searchByText(text);
  }
}
