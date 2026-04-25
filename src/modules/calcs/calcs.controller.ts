import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { CalcsService } from './calcs.service';
import { GetSourdoughsRatioDto } from './dto/get-sourdoughs-ratio.dto';
import { SourdoughsRatioResponseDto } from './dto/sourdoughs-ratio-response.dto';

@Controller('calcs')
export class CalcsController {
  constructor(private readonly calcsService: CalcsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  sourdoughs(@Query() query: GetSourdoughsRatioDto) {
    const ratio = this.calcsService.calculateSourdough(query);
    return new SourdoughsRatioResponseDto(ratio);
  }
}
