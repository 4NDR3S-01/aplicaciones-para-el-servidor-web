import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriteriosEvaluacion } from './entities/criterios-evaluacion.entity';
import { CreateCriteriosEvaluacionDto } from './dto/create-criterios-evaluacion.dto';
import { UpdateCriteriosEvaluacionDto } from './dto/update-criterios-evaluacion.dto';

@Injectable()
export class CriteriosEvaluacionService {
  constructor(
    @InjectRepository(CriteriosEvaluacion)
    private readonly repo: Repository<CriteriosEvaluacion>,
  ) {}

  async create(dto: CreateCriteriosEvaluacionDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateCriteriosEvaluacionDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
