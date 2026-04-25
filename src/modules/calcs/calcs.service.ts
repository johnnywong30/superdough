import { Injectable } from '@nestjs/common';
import { GetSourdoughsRatioDto } from './dto/get-sourdoughs-ratio.dto';
import { SourdoughsRatioResponseDto } from './dto/sourdoughs-ratio-response.dto';

@Injectable()
export class CalcsService {
  calculateSourdough(query: GetSourdoughsRatioDto) {
    const { grams, starter, flour, water } = query;

    const starterRatio = starter / (starter + flour + water);
    const flourRatio = flour / (starter + flour + water);
    const waterRatio = water / (starter + flour + water);

    const starterGrams = grams * starterRatio;
    const flourGrams = grams * flourRatio;
    const waterGrams = grams * waterRatio;

    return {
      grams,
      starter: starterGrams,
      flour: flourGrams,
      water: waterGrams,
    };
  }
}
