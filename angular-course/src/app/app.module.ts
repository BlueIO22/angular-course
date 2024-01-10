import { NgModule, importProvidersFrom } from '@angular/core';

import { AppComponent } from './app.component';
import { MealForm } from '../mealForm/mealForm.component';
import { MainNavbar } from '../navbarMain/navbarMain.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesComponent } from '../recipies/recipies.component';
import { MyFavoritesComponent } from '../favorites/myFavorites.component';
import { HomeComponent } from '../home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MealFormModule } from '../mealForm/mealForm.module';
import { RecipiesModule } from '../recipies/recipies.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

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
  imports: [
    SharedModule,
    RouterModule.forRoot(appRoutes),
    MealFormModule,
    RecipiesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
