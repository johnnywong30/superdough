import { Injectable } from '@nestjs/common';
import { GetSourdoughsRatioDto } from './dto/get-sourdoughs-ratio.dto';
import { GetStarterRatioDto } from './dto/get-starter-ratio.dto';
import CalcsConstants from './calcs.constants';

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

  calculateStarterRatio(query: GetStarterRatioDto) {
    const { weight, flour, water } = query;

    const currentStarterGrams = Number(
      (weight - CalcsConstants.MASON_JAR_WEIGHT).toFixed(2),
    );

    const neededFlour = Number((currentStarterGrams * flour).toFixed(2));
    const neededWater = Number((currentStarterGrams * water).toFixed(2));

    return {
      starter: currentStarterGrams,
      flour: neededFlour,
      water: neededWater,
    };
  }
}
