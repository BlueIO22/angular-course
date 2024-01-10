import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../app/app.component';
import { CommonModule } from '@angular/common';
import { MealDisplay } from '../mealDisplay/mealDisplay.component';
import { initialRecipieList } from '../demo/data';

@Component({
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  selector: 'recipies',
})
export class RecipiesComponent implements OnInit {
  recipies: Recipe[] = JSON.parse(localStorage.getItem('recipies')) ?? [];
  search: '';

  ngOnInit(): void {
    if (
      localStorage.getItem('recipies') === null ||
      localStorage.getItem('recipies') === undefined ||
      JSON.parse(localStorage.getItem('recipies')).length === 0
    ) {
      localStorage.setItem('recipies', JSON.stringify(initialRecipieList));
    }
  }

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
        x.name.toLowerCase().includes(search.toLowerCase()) ||
        x.description.toLowerCase().includes(search.toLowerCase()) ||
        x.ingredients.some((y) =>
          y.name.toLowerCase().startsWith(search.toLowerCase())
        )
    );
  };
}
