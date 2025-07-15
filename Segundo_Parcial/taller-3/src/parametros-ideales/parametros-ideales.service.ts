import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParametrosIdeale } from './entities/parametros-ideale.entity';
import { CreateParametrosIdealeDto } from './dto/create-parametros-ideale.dto';
import { UpdateParametrosIdealeDto } from './dto/update-parametros-ideale.dto';

@Injectable()
export class ParametrosIdealesService {
  constructor(
    @InjectRepository(ParametrosIdeale)
    private readonly repo: Repository<ParametrosIdeale>,
  ) {}

  async create(dto: CreateParametrosIdealeDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateParametrosIdealeDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { deleted: true };
  }
}
