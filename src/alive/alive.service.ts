import { Injectable } from '@nestjs/common';

@Injectable()
export class AliveService {
  alive() {
    return 'Acho que não pedi para ser acordado!';
  }
}
