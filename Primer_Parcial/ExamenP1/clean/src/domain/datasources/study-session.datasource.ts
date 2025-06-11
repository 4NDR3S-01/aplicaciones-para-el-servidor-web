import { CreateStudySessionDto } from '../dtos';
import { StudySessionEntity } from '../entities/study-session.entity';

export interface StudyStats {
  totalSessions: number;
  correctAnswers: number;
  averageTime: number;
  difficultyDistribution: {[key: string]: number};
  categoryStats: {[key: string]: {total: number, correct: number}};
}

export abstract class StudySessionDatasource {

  abstract create(createStudySessionDto: CreateStudySessionDto): Promise<StudySessionEntity>;
  
  // TOO: paginación
  abstract getAll(): Promise<StudySessionEntity[]>;
  
  abstract findById(id: number): Promise<StudySessionEntity>;
  abstract findByFlashcardId(flashcardId: number): Promise<StudySessionEntity[]>;
  abstract findByCategory(category: string): Promise<StudySessionEntity[]>;
  
  // Estadísticas de estudio
  abstract getStudyStats(flashcardId?: number): Promise<StudyStats>;
  abstract getRecentSessions(limit?: number): Promise<StudySessionEntity[]>;
}
