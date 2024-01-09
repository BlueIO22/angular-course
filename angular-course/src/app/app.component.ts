import { Component } from '@angular/core';
import { initialRecipieList } from '../demo/data';

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
export class AppComponent {}
