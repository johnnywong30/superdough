import { Expose } from 'class-transformer';

export class StarterRatioResponseDto {
  starter: number = 1;
  flour: number = 2;
  water: number = 2;

  @Expose()
  get message(): string {
    return `Have ${this.starter}g of Starter.  Need ${this.flour}g of Flour and ${this.water}g of Water.`;
  }

  constructor(partial: Partial<StarterRatioResponseDto>) {
    Object.assign(this, partial);
  }
}
