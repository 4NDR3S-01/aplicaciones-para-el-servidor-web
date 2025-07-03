import { Module } from '@nestjs/common';
import { GrabacionesService } from './grabaciones.service';
import { GrabacionesResolver } from './grabaciones.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grabacione } from './entities/grabacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grabacione])],
  providers: [GrabacionesResolver, GrabacionesService],
})
export class GrabacionesModule {}
