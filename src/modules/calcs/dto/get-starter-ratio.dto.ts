import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, Min, IsOptional } from 'class-validator';

import CalcsConstants from '../calcs.constants';

export class GetStarterRatioDto {
  @ApiProperty({
    minimum: CalcsConstants.MIN_WEIGHT,
    description: 'Total grams of starter mix (jar + starter only)',
  })
  @IsNumber()
  @Min(CalcsConstants.MIN_WEIGHT)
  weight: number = CalcsConstants.MIN_WEIGHT;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
    description: 'Sourdough starter term in the ratio',
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  starter: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    default: 5,
    description: 'Flour term in the ratio',
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  flour: number = 5;

  @ApiPropertyOptional({
    minimum: 1,
    default: 5,
    description: 'Water term in the ratio',
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  water: number = 5;
}
