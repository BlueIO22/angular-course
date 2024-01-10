import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../app/app.component';
import { MealDisplay } from '../mealDisplay/mealDisplay.component';
@Component({
  templateUrl: './myFavorites.component.html',
  styleUrls: ['./myFavorites.component.css'],
  selector: 'my-favorites',
  imports: [CommonModule, MealDisplay],
  standalone: true,
})
export class MyFavoritesComponent implements OnInit {
  favorites: Recipe[] = [];
  onUpdateList = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites !== null) {
      this.favorites = favorites;
    }
  };
  ngOnInit() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites !== null) {
      this.favorites = favorites;
    }
  }
}
