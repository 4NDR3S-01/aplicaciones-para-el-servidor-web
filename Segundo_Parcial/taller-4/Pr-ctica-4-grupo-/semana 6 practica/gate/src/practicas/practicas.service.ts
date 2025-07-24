import { Injectable } from '@nestjs/common';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Injectable()
export class PracticasService {
  create(createPracticaDto: CreatePracticaDto) {
    return 'This action adds a new practica';
  }

  findAll() {
    return `This action returns all practicas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} practica`;
  }

  update(id: number, updatePracticaDto: UpdatePracticaDto) {
    return `This action updates a #${id} practica`;
  }

  remove(id: number) {
    return `This action removes a #${id} practica`;
  }
}
