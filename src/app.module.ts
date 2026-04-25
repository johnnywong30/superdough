import { Module } from '@nestjs/common';
import { CalcsModule } from './modules/calcs/calcs.module';
import { RecipesModule } from './modules/recipes/recipes.module';

@Module({
  imports: [CalcsModule, RecipesModule],
})
export class AppModule {}
