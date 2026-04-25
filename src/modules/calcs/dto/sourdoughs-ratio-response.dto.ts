import { Expose } from 'class-transformer';

export class SourdoughsRatioResponseDto {
  grams: number;
  starter: number;
  flour: number;
  water: number;

  @Expose()
  get message(): string {
    return `Starter: ${this.starter}g | Flour: ${this.flour}g | Water: ${this.water}g`;
  }

  constructor(partial: Partial<SourdoughsRatioResponseDto>) {
    Object.assign(this, partial);
  }
}
