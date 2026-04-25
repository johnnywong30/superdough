import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, Min, IsOptional } from 'class-validator';

export class GetSourdoughsRatioDto {
  @ApiProperty({
    minimum: 1,
    maximum: 100000,
    description: 'Total grams of sourdough mix',
  })
  @IsNumber()
  @Min(1)
  grams: number;

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
    default: 2,
    description: 'Flour term in the ratio',
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  flour: number = 2;

  @ApiPropertyOptional({
    minimum: 1,
    default: 2,
    description: 'Water term in the ratio',
  })
  @IsNumber()
  @Min(1)
  @IsOptional()
  water: number = 2;
}
