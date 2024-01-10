import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyFavoritesComponent } from './myFavorites.component';
import { MealDisplay } from '../mealDisplay/mealDisplay.component';
import { MealDisplayModule } from '../mealDisplay/mealDisplay.module';

@NgModule({
  declarations: [MyFavoritesComponent],
  imports: [BrowserModule, MealDisplayModule],
  providers: [],
  bootstrap: [],
})
export class MyFavoritesModule {}
