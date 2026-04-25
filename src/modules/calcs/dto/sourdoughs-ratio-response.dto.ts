import { Expose } from 'class-transformer';

export class SourdoughsRatioResponseDto {
  grams: number = 220;
  starter: number = 1;
  flour: number = 2;
  water: number = 2;

  @Expose()
  get message(): string {
    return `Starter: ${this.starter}g | Flour: ${this.flour}g | Water: ${this.water}g`;
  }

  constructor(partial: Partial<SourdoughsRatioResponseDto>) {
    Object.assign(this, partial);
  }
}
