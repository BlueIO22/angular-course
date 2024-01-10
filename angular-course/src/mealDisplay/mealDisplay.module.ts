import { BrowserModule } from '@angular/platform-browser';
import { MealDisplay } from './mealDisplay.component';
import { NgModule } from '@angular/core';
import { ManageModule } from '../manage/manage.module';
import { MealFormModule } from '../mealForm/mealForm.module';
import { ManageComponent } from '../manage/manage.component';

@NgModule({
  declarations: [MealDisplay, ManageComponent],
  imports: [BrowserModule, MealFormModule],
  providers: [],
  bootstrap: [],
  exports: [MealDisplay],
})
export class MealDisplayModule {}
