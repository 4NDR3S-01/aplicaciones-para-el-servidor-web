import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { GrabacionesModule } from './grabaciones/grabaciones.module';
import { TipoMetricaModule } from './tipo-metrica/tipo-metrica.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FeedbacksModule,
    GrabacionesModule,
    TipoMetricaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
