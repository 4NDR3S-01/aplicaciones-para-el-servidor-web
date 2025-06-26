import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grabacion } from './entities/grabacion.entity';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';

@Injectable()
export class GrabacionesService {
  constructor(
    @InjectRepository(Grabacion)
    private grabacionRepository: Repository<Grabacion>,
  ) {}

  create(createGrabacionDto: CreateGrabacionDto) {
    const grabacion = this.grabacionRepository.create(createGrabacionDto);
    return this.grabacionRepository.save(grabacion);
  }

  findAll() {
    return this.grabacionRepository.find();
  }

  async findOne(id: number) {
    const grabacion = await this.grabacionRepository.findOne({ where: { id } });
    if (!grabacion) {
      throw new NotFoundException(`Grabación con ID ${id} no encontrada`);
    }
    return grabacion;
  }

  async update(id: number, updateGrabacionDto: UpdateGrabacionDto) {
    const grabacion = await this.findOne(id);
    Object.assign(grabacion, updateGrabacionDto);
    return this.grabacionRepository.save(grabacion);
  }

  async remove(id: number) {
    const grabacion = await this.findOne(id);
    return this.grabacionRepository.remove(grabacion);
  }
} 