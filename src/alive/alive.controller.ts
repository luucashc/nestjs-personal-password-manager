import { Controller, Get } from '@nestjs/common';
import { AliveService } from './alive.service';

@Controller('alive')
export class AliveController {
  constructor(private aliveService: AliveService) {}

  @Get()
  alive() {
    return this.aliveService.alive();
  }
}
