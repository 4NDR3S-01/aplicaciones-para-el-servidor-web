import { CreateStudySessionDto } from '../dtos';
import { StudySessionEntity } from '../entities/study-session.entity';
import { StudyStats } from '../datasources/study-session.datasource';

export abstract class StudySessionRepository {

  abstract create(createStudySessionDto: CreateStudySessionDto): Promise<StudySessionEntity>;
  
  // TODO: paginación
  abstract getAll(): Promise<StudySessionEntity[]>;
  
  abstract findById(id: number): Promise<StudySessionEntity>;
  abstract findByFlashcardId(flashcardId: number): Promise<StudySessionEntity[]>;
  abstract findByCategory(category: string): Promise<StudySessionEntity[]>;
  
  // Estadísticas de estudio
  abstract getStudyStats(flashcardId?: number): Promise<StudyStats>;
  abstract getRecentSessions(limit?: number): Promise<StudySessionEntity[]>;
}
