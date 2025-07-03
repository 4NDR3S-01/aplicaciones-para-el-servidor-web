import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Grabacione } from '../../grabaciones/entities/grabacione.entity';

@ObjectType()
@Entity('feedbacks')
export class Feedback {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  comentario: string;

  @Field(() => Int)
  @Column()
  calificacion: number;

  @ManyToOne(() => Grabacione, grabacion => grabacion.feedbacks)
  grabacion: Grabacione;
}
