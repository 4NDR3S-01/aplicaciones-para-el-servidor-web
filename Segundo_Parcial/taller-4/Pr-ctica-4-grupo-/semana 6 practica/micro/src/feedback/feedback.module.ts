import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';

@Module({
  imports: [],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
