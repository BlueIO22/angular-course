import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Recipe } from '../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MealDisplay } from '../mealDisplay/mealDisplay.component';

@Component({
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  imports: [FormsModule, CommonModule, MealDisplay],
  selector: 'recipies',
  standalone: true,
})
export class RecipiesComponent {
  recipies: Recipe[] = JSON.parse(localStorage.getItem('recipies')) ?? [];
  search: '';

  onUpdateList = () => {
    this.recipies = JSON.parse(localStorage.getItem('recipies')) ?? [];
  };

  searchRecipie = (event: any) => {
    const search = event.target.value;

    const items = JSON.parse(localStorage.getItem('recipies')) ?? [];
    if (search.length === 0) {
      this.recipies = items;
      return;
    }

    this.recipies = items.filter(
      (x) =>
        x.name.toLowerCase().startsWith(search.toLowerCase()) ||
        x.description.toLowerCase().includes(search.toLowerCase()) ||
        x.ingredients.some((y) =>
          y.name.toLowerCase().startsWith(search.toLowerCase())
        )
    );
  };
}
