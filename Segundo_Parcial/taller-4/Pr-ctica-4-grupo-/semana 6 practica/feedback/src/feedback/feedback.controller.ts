import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Controller()
export class FeedbackController {
  constructor(private readonly usersService: FeedbackService) {}

  @MessagePattern('feedback.create')
  create(@Payload() createDto: CreateFeedbackDto) {
    return this.usersService.create(createDto);
  }

  @MessagePattern('feedback.findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern('feedback.findOne')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern('feedback.update')
  update(@Payload() updateDto: UpdateFeedbackDto) {
    return this.usersService.update(updateDto.id, updateDto);
  }

  @MessagePattern('feedback.remove')
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
