import {
  Controller,
  Get,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CalcsService } from './calcs.service';
import { GetSourdoughsRatioDto } from './dto/get-sourdoughs-ratio.dto';
import { SourdoughsRatioResponseDto } from './dto/sourdoughs-ratio-response.dto';
import { GetStarterRatioDto } from './dto/get-starter-ratio.dto';
import { StarterRatioResponseDto } from './dto/starter-ratio-response.dto';

@Controller('calcs')
export class CalcsController {
  constructor(private readonly calcsService: CalcsService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Get sourdoughs ratio in grams when baking' })
  @ApiResponse({
    status: 200,
    type: SourdoughsRatioResponseDto,
  })
  @Get('sourdoughs')
  sourdoughs(@Query() query: GetSourdoughsRatioDto) {
    const ratio = this.calcsService.calculateSourdough(query);
    return new SourdoughsRatioResponseDto(ratio);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Get starter ratio in grams when feeding' })
  @ApiResponse({
    status: 200,
    type: StarterRatioResponseDto,
  })
  @Get('starters')
  starters(@Query() query: GetStarterRatioDto) {
    const ratio = this.calcsService.calculateStarterRatio(query);
    return new StarterRatioResponseDto(ratio);
  }
}
