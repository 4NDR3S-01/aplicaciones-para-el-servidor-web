import { Module } from '@nestjs/common';
import { ParametrosIdealesService } from './parametros-ideales.service';
import { ParametrosIdealesGateway } from './parametros-ideales.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParametrosIdeale } from './entities/parametros-ideale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParametrosIdeale])],
  providers: [ParametrosIdealesGateway, ParametrosIdealesService],
})
export class ParametrosIdealesModule {}
