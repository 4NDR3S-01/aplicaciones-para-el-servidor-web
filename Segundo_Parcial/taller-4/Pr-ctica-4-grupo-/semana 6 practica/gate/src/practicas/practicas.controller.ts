import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { PracticasService } from './practicas.service';

import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('practicas')
export class PracticasController {
  constructor(
    @Inject("MATH_SERVICE")
    private cliente: ClientProxy) {}

  @Post()
  async create(@Body() createPracticaDto: CreatePracticaDto) {
    return firstValueFrom(this.cliente.send('practicas.create', createPracticaDto));
  }

  @Get()
  async findAll() {
    return firstValueFrom(this.cliente.send('practicas.findAll', {}));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('practicas.findOne', id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePracticaDto: UpdatePracticaDto) {
    const payload = { ...updatePracticaDto };
    payload.id = id;
    return firstValueFrom(this.cliente.send('practicas.update', payload));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('practicas.remove', id));
  }
}
