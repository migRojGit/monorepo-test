import { Module } from '@nestjs/common';
import { ExempleDomainService } from './services/exemple-domain.service';


@Module({
  providers: [ExempleDomainService]
})
export class DomainModule {}
