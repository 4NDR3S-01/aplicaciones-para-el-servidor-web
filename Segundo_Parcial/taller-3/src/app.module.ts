import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CalificacionesModule } from './calificaciones/calificaciones.module';
import { ParametrosIdealesModule } from './parametros-ideales/parametros-ideales.module';
import { CriteriosEvaluacionModule } from './criterios-evaluacion/criterios-evaluacion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CalificacionesModule, ParametrosIdealesModule, CriteriosEvaluacionModule],
  controllers: [],
  providers: [],

})
export class AppModule {}
