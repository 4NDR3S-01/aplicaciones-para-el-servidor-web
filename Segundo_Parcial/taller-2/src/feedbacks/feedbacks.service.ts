import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { Grabacione } from '../grabaciones/entities/grabacione.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    @InjectRepository(Grabacione)
    private readonly grabacionRepository: Repository<Grabacione>,
  ) {}

  async create(createFeedbackInput: CreateFeedbackInput) {
    const grabacion = await this.grabacionRepository.findOne({ where: { id: createFeedbackInput.grabacionId } });
    if (!grabacion) {
      throw new Error('Grabación no encontrada');
    }
    const feedback = this.feedbackRepository.create({
      ...createFeedbackInput,
      grabacion,
    });
    return this.feedbackRepository.save(feedback);
  }

  findAll() {
    return this.feedbackRepository.find({ relations: ['grabacion'] });
  }

  findOne(id: number) {
    return this.feedbackRepository.findOne({ where: { id }, relations: ['grabacion'] });
  }

  async update(id: number, updateFeedbackInput: UpdateFeedbackInput) {
    if (updateFeedbackInput.grabacionId) {
      const grabacion = await this.grabacionRepository.findOne({ where: { id: updateFeedbackInput.grabacionId } });
      if (!grabacion) {
        throw new Error('Grabación no encontrada');
      }
      await this.feedbackRepository.update(id, { ...updateFeedbackInput, grabacion });
    } else {
      await this.feedbackRepository.update(id, updateFeedbackInput);
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const feedback = await this.findOne(id);
    await this.feedbackRepository.delete(id);
    return feedback;
  }
}
