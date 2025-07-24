import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PracticasService } from './practicas.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

@Controller()
export class PracticasController {
  constructor(private readonly usersService: PracticasService) {}

  @MessagePattern('practicas.create')
  create(@Payload() createPracticaDto: CreatePracticaDto) {
    return this.usersService.create(createPracticaDto);
  }

  @MessagePattern('practicas.findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern('practicas.findOne')
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern('practicas.update')
  update(@Payload() updatePracticaDto: UpdatePracticaDto) {
    return this.usersService.update(updatePracticaDto.id, updatePracticaDto);
  }

  @MessagePattern('practicas.remove')
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
