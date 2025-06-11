
/**
 * PARÁMETRO 1: Definición del dominio - Entidad StudySession
 * Esta entidad modela las sesiones de estudio para el algoritmo de repetición espaciada,
 * registrando el rendimiento del usuario y determinando cuándo revisar cada flashcard.
 */
export class StudySessionEntity {

  constructor(
    public id: number,
    public flashcardId: number,
    public category: string,
    public response: 'easy' | 'medium' | 'hard' | 'again',
    public timeSpent: number, // en segundos
    public studiedAt: Date = new Date()
  ) {}

  public static fromObject(object: {[key: string]: any}): StudySessionEntity {
    const { id, flashcardId, category, response, timeSpent, studiedAt } = object;
    
    if (!id) throw new Error('Id is required');
    if (!flashcardId) throw new Error('FlashcardId is required');
    if (!category) throw new Error('Category is required');
    if (!response) throw new Error('Response is required');
    if (!timeSpent) throw new Error('TimeSpent is required');

    const validResponses = ['easy', 'medium', 'hard', 'again'];
    if (!validResponses.includes(response)) {
      throw new Error('Response must be one of: easy, medium, hard, again');
    }

    return new StudySessionEntity(
      id,
      flashcardId,
      category,
      response,
      timeSpent,
      studiedAt ? new Date(studiedAt) : new Date()
    );
  }

  public getResponseScore(): number {
    const scoreMap = {
      'easy': 4,
      'medium': 3,
      'hard': 2,
      'again': 1
    };
    return scoreMap[this.response];
  }

  public isCorrect(): boolean {
    return this.response !== 'again';
  }
}
