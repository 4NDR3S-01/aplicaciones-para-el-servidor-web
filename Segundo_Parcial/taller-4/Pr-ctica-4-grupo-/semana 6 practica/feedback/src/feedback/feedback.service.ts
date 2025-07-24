import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { Feedback } from './entities/feedback.entity';

const feedbacks: Feedback[] = [];

@Injectable()
export class FeedbackService {
  create(createFeedbackDto: CreateFeedbackDto) {
    const nuevo: Feedback = {
      id: (feedbacks.length + 1).toString(),
      comentario: createFeedbackDto.comentario,
    };
    feedbacks.push(nuevo);
    return nuevo;
  }

  findAll() {
    return feedbacks;
  }

  findOne(id: string) {
    return feedbacks.find(f => f.id === id);
  }

  update(id: string, updateFeedbackDto: UpdateFeedbackDto) {
    const idx = feedbacks.findIndex(f => f.id === id);
    if (idx === -1) return undefined;
    feedbacks[idx] = { ...feedbacks[idx], ...updateFeedbackDto };
    return feedbacks[idx];
  }

  remove(id: string) {
    const idx = feedbacks.findIndex(f => f.id === id);
    if (idx === -1) return undefined;
    const [deleted] = feedbacks.splice(idx, 1);
    return deleted;
  }
}
