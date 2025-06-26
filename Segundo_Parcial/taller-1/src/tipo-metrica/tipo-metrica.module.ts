import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMetricaService } from './tipo-metrica.service';
import { TipoMetricaController } from './tipo-metrica.controller';
import { TipoMetrica } from './entities/tipo-metrica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMetrica])],
  controllers: [TipoMetricaController],
  providers: [TipoMetricaService],
})
export class TipoMetricaModule {}
