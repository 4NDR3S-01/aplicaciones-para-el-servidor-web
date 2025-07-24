import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TransportModule } from '../modules/transport.module';
@Module({
  imports: [TransportModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
