import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calificacione } from './entities/calificacione.entity';
import { CreateCalificacioneDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';

@Injectable()
export class CalificacionesService {
  constructor(
    @InjectRepository(Calificacione)
    private readonly repo: Repository<Calificacione>,
  ) {}

  async create(dto: CreateCalificacioneDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateCalificacioneDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
