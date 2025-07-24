import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PracticasModule } from './practicas/practicas.module';

@Module({
  imports: [PracticasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
