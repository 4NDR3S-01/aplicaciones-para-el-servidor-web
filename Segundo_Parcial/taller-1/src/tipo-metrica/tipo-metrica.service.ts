import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoMetrica } from './entities/tipo-metrica.entity';
import { CreateTipoMetricaDto } from './dto/create-tipo-metrica.dto';
import { UpdateTipoMetricaDto } from './dto/update-tipo-metrica.dto';

@Injectable()
export class TipoMetricaService {
  constructor(
    @InjectRepository(TipoMetrica)
    private tipoMetricaRepository: Repository<TipoMetrica>,
  ) {}

  create(createTipoMetricaDto: CreateTipoMetricaDto) {
    const tipoMetrica = this.tipoMetricaRepository.create(createTipoMetricaDto);
    return this.tipoMetricaRepository.save(tipoMetrica);
  }

  findAll() {
    return this.tipoMetricaRepository.find();
  }

  async findOne(id: number) {
    const tipoMetrica = await this.tipoMetricaRepository.findOne({ where: { id } });
    if (!tipoMetrica) {
      throw new NotFoundException(`TipoMetrica con ID ${id} no encontrada`);
    }
    return tipoMetrica;
  }

  async update(id: number, updateTipoMetricaDto: UpdateTipoMetricaDto) {
    const tipoMetrica = await this.findOne(id);
    Object.assign(tipoMetrica, updateTipoMetricaDto);
    return this.tipoMetricaRepository.save(tipoMetrica);
  }

  async remove(id: number) {
    const tipoMetrica = await this.findOne(id);
    return this.tipoMetricaRepository.remove(tipoMetrica);
  }
} 