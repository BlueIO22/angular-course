import { Firestore } from 'firebase/firestore';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Injectable, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, Routes, provideRouter } from '@angular/router';
import { MyFavoritesComponent } from '../favorites/myFavorites.component';
import { MealForm } from '../mealForm/mealForm.component';
import { RecipiesComponent } from '../recipies/recipies.component';
import { HomeComponent } from '../home/home.component';
import { MainNavbar } from '../navbarMain/navbarMain.component';
import { HttpClientModule } from '@angular/common/http';

export type Ingredient = {
  name: string;
  amount: number;
};

export type Recipe = {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: 'recipe-app';
  firestore = inject(Firestore);
}
