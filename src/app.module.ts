import { Module } from '@nestjs/common';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [PasswordModule],
})
export class AppModule {}
