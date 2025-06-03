import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { GrabacionTypeORM } from './grabacion.typeorm';
import { ParametroIdealTypeORM } from './parametro-ideal.typeorm';

@Entity({ name: 'feedbacks' })
export class FeedbackTypeORM {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'int', name: 'grabacion_id' })
  grabacionId!: number;

  @Column({ type: 'int', name: 'parametro_ideal_id' })
  parametroIdealId!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'valor_obtenido' })
  valorObtenido!: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  puntuacion!: number;

  @Column({ type: 'text', nullable: true })
  comentario?: string;

  @Column({ type: 'boolean', default: false, name: 'es_manual' })
  esManual!: boolean;

  @Column({ type: 'timestamp', nullable: true, name: 'fecha_analisis' })
  fechaAnalisis?: Date;

  @Column({ type: 'decimal', precision: 3, scale: 2, nullable: true })
  confiabilidad?: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  // Relaciones
  @ManyToOne(() => GrabacionTypeORM, (grabacion) => grabacion.feedbacks)
  @JoinColumn({ name: 'grabacion_id' })
  grabacion!: GrabacionTypeORM;

  @ManyToOne(() => ParametroIdealTypeORM, (parametro) => parametro.feedbacks)
  @JoinColumn({ name: 'parametro_ideal_id' })
  parametroIdeal!: ParametroIdealTypeORM;
}
