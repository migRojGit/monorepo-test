import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from './src/core/.module';
import { Module } from './core/core.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [Module, InfraestructureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
