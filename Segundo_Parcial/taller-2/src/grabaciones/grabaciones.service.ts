import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grabacione } from './entities/grabacione.entity';
import { CreateGrabacioneInput } from './dto/create-grabacione.input';
import { UpdateGrabacioneInput } from './dto/update-grabacione.input';

@Injectable()
export class GrabacionesService {
  constructor(
    @InjectRepository(Grabacione)
    private readonly grabacionRepository: Repository<Grabacione>,
  ) {}

  create(createGrabacioneInput: CreateGrabacioneInput) {
    const grabacion = this.grabacionRepository.create(createGrabacioneInput);
    return this.grabacionRepository.save(grabacion);
  }

  findAll() {
    return this.grabacionRepository.find({ relations: ['feedbacks'] });
  }

  findOne(id: number) {
    return this.grabacionRepository.findOne({ where: { id }, relations: ['feedbacks'] });
  }

  async update(id: number, updateGrabacioneInput: UpdateGrabacioneInput) {
    await this.grabacionRepository.update(id, updateGrabacioneInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    const grabacion = await this.findOne(id);
    await this.grabacionRepository.delete(id);
    return grabacion;
  }
}
