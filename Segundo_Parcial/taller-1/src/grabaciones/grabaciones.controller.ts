import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { GrabacionesService } from './grabaciones.service';
import { CreateGrabacionDto } from './dto/create-grabacion.dto';
import { UpdateGrabacionDto } from './dto/update-grabacion.dto';

@Controller('grabaciones')
export class GrabacionesController {
  constructor(private readonly grabacionesService: GrabacionesService) {}

  @Post()
  create(@Body() createGrabacionDto: CreateGrabacionDto) {
    return this.grabacionesService.create(createGrabacionDto);
  }

  @Get()
  findAll() {
    return this.grabacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.grabacionesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGrabacionDto: UpdateGrabacionDto,
  ) {
    return this.grabacionesService.update(id, updateGrabacionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.grabacionesService.remove(id);
  }
}
