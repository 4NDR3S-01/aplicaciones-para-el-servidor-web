import { Module } from '@nestjs/common';
import { TipoMetricaService } from './tipo-metrica.service';
import { TipoMetricaResolver } from './tipo-metrica.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMetrica } from './entities/tipo-metrica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMetrica])],
  providers: [TipoMetricaResolver, TipoMetricaService],
})
export class TipoMetricaModule {}
