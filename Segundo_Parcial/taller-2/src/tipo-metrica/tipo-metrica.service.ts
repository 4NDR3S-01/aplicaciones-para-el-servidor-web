import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoMetrica } from './entities/tipo-metrica.entity';
import { CreateTipoMetricaInput } from './dto/create-tipo-metrica.input';
import { UpdateTipoMetricaInput } from './dto/update-tipo-metrica.input';

@Injectable()
export class TipoMetricaService {
  constructor(
    @InjectRepository(TipoMetrica)
    private readonly tipoMetricaRepository: Repository<TipoMetrica>,
  ) {}

  create(createTipoMetricaInput: CreateTipoMetricaInput) {
    const tipoMetrica = this.tipoMetricaRepository.create(createTipoMetricaInput);
    return this.tipoMetricaRepository.save(tipoMetrica);
  }

  findAll() {
    return this.tipoMetricaRepository.find();
  }

  findOne(id: number) {
    return this.tipoMetricaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTipoMetricaInput: UpdateTipoMetricaInput) {
    await this.tipoMetricaRepository.update(id, updateTipoMetricaInput);
    return this.findOne(id);
  }

  async remove(id: number) {
    const tipoMetrica = await this.findOne(id);
    await this.tipoMetricaRepository.delete(id);
    return tipoMetrica;
  }
}
