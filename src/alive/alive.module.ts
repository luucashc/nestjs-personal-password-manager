import { Module } from '@nestjs/common';
import { AliveController } from './alive.controller';
import { AliveService } from './alive.service';

@Module({
  controllers: [AliveController],
  providers: [AliveService],
})
export class AliveModule {}
