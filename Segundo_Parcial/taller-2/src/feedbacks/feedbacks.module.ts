import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksResolver } from './feedbacks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { Grabacione } from '../grabaciones/entities/grabacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, Grabacione])],
  providers: [FeedbacksResolver, FeedbacksService],
})
export class FeedbacksModule {}
