import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { MetricaTypeORM } from './metrica.typeorm';
import { FeedbackTypeORM } from './feedback.typeorm';

@Entity({ name: 'parametros_ideales' })
export class ParametroIdealTypeORM {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', name: 'metrica_id' })
  metricaId!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'valor_ideal' })
  valorIdeal!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'tolerancia_minima' })
  toleranciaMinima!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'tolerancia_maxima' })
  toleranciaMaxima!: number;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'boolean', default: true })
  activo!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  // Relaciones
  @ManyToOne(() => MetricaTypeORM, (metrica) => metrica.parametrosIdeales)
  @JoinColumn({ name: 'metrica_id' })
  metrica!: MetricaTypeORM;

  @OneToMany(() => FeedbackTypeORM, (feedback) => feedback.parametroIdeal)
  feedbacks!: FeedbackTypeORM[];
}
