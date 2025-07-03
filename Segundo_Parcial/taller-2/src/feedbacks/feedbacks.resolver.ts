import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FeedbacksService } from './feedbacks.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';

@Resolver(() => Feedback)
export class FeedbacksResolver {
  constructor(private readonly feedbacksService: FeedbacksService) {}

  @Mutation(() => Feedback)
  createFeedback(@Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput) {
    return this.feedbacksService.create(createFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  findAll() {
    return this.feedbacksService.findAll();
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.feedbacksService.findOne(id);
  }

  @Mutation(() => Feedback)
  updateFeedback(@Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput) {
    return this.feedbacksService.update(updateFeedbackInput.id, updateFeedbackInput);
  }

  @Mutation(() => Feedback)
  removeFeedback(@Args('id', { type: () => Int }) id: number) {
    return this.feedbacksService.remove(id);
  }
}
