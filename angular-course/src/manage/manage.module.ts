import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManageComponent } from './manage.component';
import { MealFormModule } from '../mealForm/mealForm.module';

@NgModule({
  imports: [BrowserModule, MealFormModule],
  bootstrap: [ManageComponent],
})
export class ManageModule {}
