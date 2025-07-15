import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CriteriosEvaluacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  criterio: string;

  @Column()
  descripcion: string;

  @Column('float')
  peso: number;
}
