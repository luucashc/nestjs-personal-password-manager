import { Module } from '@nestjs/common';
import { AliveModule } from './alive/alive.module';

@Module({
  imports: [AliveModule],
})
export class AppModule {}
