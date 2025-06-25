import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
