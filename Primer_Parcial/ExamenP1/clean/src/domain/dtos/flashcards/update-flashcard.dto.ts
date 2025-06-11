export class UpdateFlashcardDto {

  private constructor(
    public readonly id: number,
    public readonly question?: string,
    public readonly answer?: string,
    public readonly categories?: string[],
    public readonly difficulty?: number
  ) {}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if (this.question) returnObj.question = this.question;
    if (this.answer) returnObj.answer = this.answer;
    if (this.categories) returnObj.categories = this.categories;
    if (this.difficulty) returnObj.difficulty = this.difficulty;

    returnObj.updatedAt = new Date();

    return returnObj;
  }

  static create(props: {[key:string]: any}): [string?, UpdateFlashcardDto?] {
    const { id, question, answer, categories, difficulty } = props;

    if (!id || isNaN(Number(id))) {
      return ['Id must be a valid number'];
    }

    if (question !== undefined && question.trim() === '') {
      return ['Question cannot be empty'];
    }

    if (answer !== undefined && answer.trim() === '') {
      return ['Answer cannot be empty'];
    }

    if (categories && (!Array.isArray(categories) || categories.length === 0)) {
      return ['Categories must be a non-empty array'];
    }

    if (categories?.some((cat: string) => !cat || cat.trim() === '')) {
      return ['Categories cannot be empty'];
    }

    if (difficulty && (difficulty < 1 || difficulty > 5)) {
      return ['Difficulty must be between 1 and 5'];
    }

    return [undefined, new UpdateFlashcardDto(
      id,
      question?.trim(),
      answer?.trim(),
      categories?.map((cat: string) => cat.trim()),
      difficulty
    )];
  }
}
