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
import { TipoMetricaService } from './tipo-metrica.service';
import { CreateTipoMetricaDto } from './dto/create-tipo-metrica.dto';
import { UpdateTipoMetricaDto } from './dto/update-tipo-metrica.dto';

@Controller('tipo-metrica')
export class TipoMetricaController {
  constructor(private readonly tipoMetricaService: TipoMetricaService) {}

  @Post()
  create(@Body() createTipoMetricaDto: CreateTipoMetricaDto) {
    return this.tipoMetricaService.create(createTipoMetricaDto);
  }

  @Get()
  findAll() {
    return this.tipoMetricaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tipoMetricaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTipoMetricaDto: UpdateTipoMetricaDto,
  ) {
    return this.tipoMetricaService.update(id, updateTipoMetricaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoMetricaService.remove(id);
  }
}
