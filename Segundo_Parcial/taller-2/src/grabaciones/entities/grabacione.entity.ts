import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Feedback } from '../../feedbacks/entities/feedback.entity';

@ObjectType()
@Entity('grabaciones')
export class Grabacione {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  url: string;

  @Field()
  @Column()
  fecha: Date;

  @Field()
  @Column()
  descripcion: string;

  @OneToMany(() => Feedback, feedback => feedback.grabacion)
  feedbacks: Feedback[];
}
