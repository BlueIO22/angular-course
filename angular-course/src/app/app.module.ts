import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MealForm } from '../mealForm/mealForm.component';
import { MealDisplay } from '../mealDisplay/mealDisplay.component';
import { MainNavbar } from '../navbarMain/navbarMain.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from '../recipies/recipies.component';
import { MyFavoritesComponent } from '../favorites/myFavorites.component';
import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'recipies',
    component: RecipiesComponent,
  },
  {
    path: 'recipies/add',
    component: MealForm,
  },
  {
    path: 'favorites',
    component: MyFavoritesComponent,
  },
];

@NgModule({
  declarations: [AppComponent, MainNavbar],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
