import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CalificacionService } from './calificacion.service';

import { CreateCalificacionDto } from './dto/create-calificacion.dto';
import { UpdateCalificacionDto } from './dto/update-calificacion.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('calificacion')
export class CalificacionController {
  constructor(
    @Inject("MATH_SERVICE")
    private cliente: ClientProxy) {}

  @Post()
  async create(@Body() createCalificacionDto: CreateCalificacionDto) {
    return firstValueFrom(this.cliente.send('calificacion.create', createCalificacionDto));
  }

  @Get()
  async findAll() {
    return firstValueFrom(this.cliente.send('calificacion.findAll', {}));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('calificacion.findOne', id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCalificacionDto: UpdateCalificacionDto) {
    const payload = { ...updateCalificacionDto };
    payload.id = id;
    return firstValueFrom(this.cliente.send('calificacion.update', payload));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('calificacion.remove', id));
  }
}
