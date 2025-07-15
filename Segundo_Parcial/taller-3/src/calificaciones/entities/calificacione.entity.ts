import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Calificacione {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alumno: string;

  @Column()
  materia: string;

  @Column('float')
  calificacion: number;

  @Column({ nullable: true })
  observaciones: string;
}
