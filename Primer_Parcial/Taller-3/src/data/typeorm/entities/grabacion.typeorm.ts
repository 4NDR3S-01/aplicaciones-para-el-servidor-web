import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FeedbackTypeORM } from './feedback.typeorm';

@Entity({ name: 'grabaciones' })
export class GrabacionTypeORM {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255, name: 'nombre_archivo' })
  nombreArchivo!: string;

  @Column({ type: 'varchar', length: 500, name: 'ruta_archivo' })
  rutaArchivo!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  duracion?: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  formato?: string;

  @Column({ type: 'timestamp', nullable: true, name: 'fecha_grabacion' })
  fechaGrabacion?: Date;

  @Column({ type: 'bigint', nullable: true, name: 'tamanio_archivo' })
  tamanioArchivo?: number;

  @Column({ type: 'boolean', default: false })
  procesado!: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: Date;

  // Relaciones
  @OneToMany(() => FeedbackTypeORM, (feedback) => feedback.grabacion)
  feedbacks!: FeedbackTypeORM[];
}
