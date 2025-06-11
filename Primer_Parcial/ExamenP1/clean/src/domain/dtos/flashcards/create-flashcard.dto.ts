export class CreateFlashcardDto {

  private constructor(
    public readonly question: string,
    public readonly answer: string,
    public readonly categories: string[],
    public readonly difficulty?: number
  ) {}

  static create(props: {[key:string]: any}): [string?, CreateFlashcardDto?] {
    const { question, answer, categories, difficulty } = props;

    if (!question || question.trim() === '') {
      return ['Question is required', undefined];
    }

    if (!answer || answer.trim() === '') {
      return ['Answer is required', undefined];
    }

    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      return ['At least one category is required', undefined];
    }

    // Validar que las categorías no estén vacías
    const validCategories = categories.filter(cat => cat && cat.trim() !== '');
    if (validCategories.length === 0) {
      return ['Categories cannot be empty', undefined];
    }

    if (difficulty && (difficulty < 1 || difficulty > 5)) {
      return ['Difficulty must be between 1 and 5', undefined];
    }

    return [undefined, new CreateFlashcardDto(
      question.trim(),
      answer.trim(),
      validCategories.map(cat => cat.trim()),
      difficulty ?? 1
    )];
  }
}
