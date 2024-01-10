import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { RecipiesComponent } from './recipies.component';
import { MealDisplayModule } from '../mealDisplay/mealDisplay.module';

@NgModule({
  declarations: [RecipiesComponent],
  imports: [SharedModule, MealDisplayModule],
  providers: [],
  bootstrap: [RecipiesComponent],
})
export class RecipiesModule {}
