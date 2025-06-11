export class CreateStudySessionDto {

  private constructor(
    public readonly flashcardId: number,
    public readonly category: string,
    public readonly response: 'easy' | 'medium' | 'hard' | 'again',
    public readonly timeSpent: number
  ) {}

  static create(props: {[key:string]: any}): [string?, CreateStudySessionDto?] {
    const { flashcardId, category, response, timeSpent } = props;

    if (!flashcardId || isNaN(Number(flashcardId))) {
      return ['FlashcardId must be a valid number', undefined];
    }

    if (!category || category.trim() === '') {
      return ['Category is required', undefined];
    }

    const validResponses = ['easy', 'medium', 'hard', 'again'];
    if (!response || !validResponses.includes(response)) {
      return ['Response must be one of: easy, medium, hard, again', undefined];
    }

    if (timeSpent === undefined || isNaN(Number(timeSpent)) || timeSpent < 0) {
      return ['TimeSpent must be a valid positive number', undefined];
    }

    return [undefined, new CreateStudySessionDto(
      Number(flashcardId),
      category.trim(),
      response,
      Number(timeSpent)
    )];
  }
}
