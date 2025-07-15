import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ParametrosIdeale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parametro: string;

  @Column('float')
  valor_ideal: number;

  @Column({ nullable: true })
  unidad: string;
}
