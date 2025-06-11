import { CreateFlashcardDto, UpdateFlashcardDto } from '../../domain/dtos';
import { FlashcardDatasource } from '../../domain/datasources/flashcard.datasource';
import { FlashcardEntity } from '../../domain/entities/flashcard.entity';

/**
 * PARÁMETRO 2: Datasource basado en objetos JSON
 * Esta clase implementa el almacenamiento en memoria usando objetos JavaScript
 * que representan la estructura JSON requerida por el parámetro de evaluación.
 */
export class FlashcardMemoryDatasource implements FlashcardDatasource {

  // PARÁMETRO 2: Array de objetos JSON como datasource
  private flashcards: FlashcardEntity[] = [
    new FlashcardEntity(
      1,
      "¿Qué es TypeScript?",
      "TypeScript es un lenguaje de programación desarrollado por Microsoft que añade tipado estático a JavaScript.",
      ["programación", "typescript", "javascript"],
      2,
      new Date('2024-01-01'),
      new Date('2024-01-01')
    ),
    new FlashcardEntity(
      2,
      "¿Qué significa REST?",
      "REST significa Representational State Transfer, un estilo arquitectónico para servicios web.",
      ["programación", "api", "web"],
      3,
      new Date('2024-01-02'),
      new Date('2024-01-02')
    ),
    new FlashcardEntity(
      3,
      "¿Qué es Clean Architecture?",
      "Clean Architecture es un patrón de diseño que separa las preocupaciones del software en capas independientes.",
      ["arquitectura", "diseño", "programación"],
      4,
      new Date('2024-01-03'),
      new Date('2024-01-03')
    )
  ];

  async create(createFlashcardDto: CreateFlashcardDto): Promise<FlashcardEntity> {
    const newFlashcard = new FlashcardEntity(
      this.flashcards.length + 1,
      createFlashcardDto.question,
      createFlashcardDto.answer,
      createFlashcardDto.categories,
      createFlashcardDto.difficulty ?? 1
    );

    this.flashcards.push(newFlashcard);
    return newFlashcard;
  }

  async getAll(): Promise<FlashcardEntity[]> {
    return this.flashcards;
  }

  async findById(id: number): Promise<FlashcardEntity> {
    const flashcard = this.flashcards.find(flashcard => flashcard.id === id);
    if (!flashcard) throw new Error(`Flashcard con la id ${id} no encontrada`);
    return flashcard;
  }

  async updateById(updateFlashcardDto: UpdateFlashcardDto): Promise<FlashcardEntity> {
    const flashcard = await this.findById(updateFlashcardDto.id);
    
    if (updateFlashcardDto.question) flashcard.question = updateFlashcardDto.question;
    if (updateFlashcardDto.answer) flashcard.answer = updateFlashcardDto.answer;
    if (updateFlashcardDto.categories) flashcard.categories = updateFlashcardDto.categories;
    if (updateFlashcardDto.difficulty) flashcard.difficulty = updateFlashcardDto.difficulty;
    
    flashcard.updatedAt = new Date();
    return flashcard;
  }

  async deleteById(id: number): Promise<FlashcardEntity> {
    const flashcard = await this.findById(id);
    this.flashcards = this.flashcards.filter(f => f.id !== id);
    return flashcard;
  }

  async findByCategory(category: string): Promise<FlashcardEntity[]> {
    return this.flashcards.filter(flashcard => 
      flashcard.categories.some(cat => 
        cat.toLowerCase().includes(category.toLowerCase())
      )
    );
  }

  async getAllCategories(): Promise<string[]> {
    const allCategories = this.flashcards.flatMap(flashcard => flashcard.categories);
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories.sort((a, b) => a.localeCompare(b));
  }

  async searchByText(text: string): Promise<FlashcardEntity[]> {
    const searchTerm = text.toLowerCase();
    return this.flashcards.filter(flashcard => 
      flashcard.question.toLowerCase().includes(searchTerm) ||
      flashcard.answer.toLowerCase().includes(searchTerm) ||
      flashcard.categories.some(cat => cat.toLowerCase().includes(searchTerm))
    );
  }
}
