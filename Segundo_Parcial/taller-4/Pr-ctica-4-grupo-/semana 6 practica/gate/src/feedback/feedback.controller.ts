import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('feedback')
export class FeedbackController {
  constructor(
    @Inject("MATH_SERVICE")
    private cliente: ClientProxy) {}

  @Post()
  async create(@Body() createFeedbackDto: CreateFeedbackDto) {
    return firstValueFrom(this.cliente.send('feedback.create', createFeedbackDto));
  }

  @Get()
  async findAll() {
    return firstValueFrom(this.cliente.send('feedback.findAll', {}));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('feedback.findOne', id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFeedbackDto: UpdateFeedbackDto) {
    const payload = { ...updateFeedbackDto };
    payload.id = id;
    return firstValueFrom(this.cliente.send('feedback.update', payload));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('feedback.remove', id));
  }
}
