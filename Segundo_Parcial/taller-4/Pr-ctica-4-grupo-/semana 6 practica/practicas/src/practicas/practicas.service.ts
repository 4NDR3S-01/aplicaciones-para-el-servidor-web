import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { Practica } from './entities/practica.entity';

const practicas: Practica[] = [];

@Injectable()
export class PracticasService {
  create(createPracticaDto: CreatePracticaDto) {
    const newPractica: Practica = {
      id: (practicas.length + 1).toString(),
      ...createPracticaDto,
    };
    practicas.push(newPractica);
    return newPractica;
  }

  findAll() {
    return practicas;
  }

  findOne(id: string) {
    return practicas.find(p => p.id === id);
  }

  update(id: string, updatePracticaDto: UpdatePracticaDto) {
    const idx = practicas.findIndex(p => p.id === id);
    if (idx === -1) return undefined;
    practicas[idx] = { ...practicas[idx], ...updatePracticaDto };
    return practicas[idx];
  }

  remove(id: string) {
    const idx = practicas.findIndex(p => p.id === id);
    if (idx === -1) return undefined;
    const [deleted] = practicas.splice(idx, 1);
    return deleted;
  }
}
