import { Module } from '@nestjs/common';
import { CalcsService } from './calcs.service';
import { CalcsController } from './calcs.controller';

@Module({
  controllers: [CalcsController],
  providers: [CalcsService],
})
export class CalcsModule {}
