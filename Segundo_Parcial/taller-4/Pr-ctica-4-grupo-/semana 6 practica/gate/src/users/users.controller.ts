import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(
    @Inject("MATH_SERVICE")
    private cliente: ClientProxy) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return firstValueFrom(this.cliente.send('users.create', createUserDto));
  }

  @Get()
  async findAll() {
    return firstValueFrom(this.cliente.send('users.findAll', {}));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('users.findOne', id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const payload = { ...updateUserDto };
    payload.id = id;
    return firstValueFrom(this.cliente.send('users.update', payload));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return firstValueFrom(this.cliente.send('users.remove', id));
  }
}
