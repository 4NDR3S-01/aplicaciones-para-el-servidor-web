import { Injectable } from '@nestjs/common';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { Calificacion } from './entities/calificacion.entity';

const calificaciones: Calificacion[] = [];

@Injectable()
export class CalificacionService {
  create(createCalificacionDto: CreateCalificacionDto) {
    const nueva: Calificacion = {
      id: (calificaciones.length + 1).toString(),
      estudianteId: createCalificacionDto.estudianteId,
      nota: parseFloat(createCalificacionDto.nota),
    };
    calificaciones.push(nueva);
    return nueva;
  }

  findAll() {
    return calificaciones;
  }

  findOne(id: string) {
    return calificaciones.find(c => c.id === id);
  }

  update(id: string, updateCalificacionDto: UpdateCalificacionDto) {
    const idx = calificaciones.findIndex(c => c.id === id);
    if (idx === -1) return undefined;
    calificaciones[idx] = { ...calificaciones[idx], ...updateCalificacionDto, nota: updateCalificacionDto.nota ? parseFloat(updateCalificacionDto.nota) : calificaciones[idx].nota };
    return calificaciones[idx];
  }

  remove(id: string) {
    const idx = calificaciones.findIndex(c => c.id === id);
    if (idx === -1) return undefined;
    const [deleted] = calificaciones.splice(idx,1);
    return deleted;
  }
}
