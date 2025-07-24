import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CalificacionService } from './calificacion.service';
import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';

@Controller()
export class CalificacionController {
  constructor(private readonly usersService: CalificacionService) {}

  @MessagePattern('calificacion.create')
  create(@Payload() createDto: CreateCalificacionDto) {
    return this.usersService.create(createDto);
  }

  @MessagePattern('calificacion.findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern('calificacion.findOne')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern('calificacion.update')
  update(@Payload() updateDto: UpdateCalificacionDto) {
    return this.usersService.update(updateDto.id, updateDto);
  }

  @MessagePattern('calificacion.remove')
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
