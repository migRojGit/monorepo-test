import { Module } from '@nestjs/common';
import { ApplicationService } from './services/exempleApplication.service';

@Module({
  providers: [ApplicationService]
})
export class ApplicationModule {}
