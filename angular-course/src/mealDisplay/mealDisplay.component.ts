import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../app/app.component';

@Component({
  templateUrl: './mealDisplay.component.html',
  styleUrl: './mealDisplay.component.css',
  selector: 'meal-display',
})
export class MealDisplay implements OnInit {
  @Input() recipie: Recipe;
  @Input() onUpdateList: () => void;
  edit: boolean = false;
  favorite: boolean = false;

  ngOnInit() {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if (favorites !== null) {
      this.favorite = favorites.some((x) => x.name === this.recipie.name);
    }
  }

  onFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites'));

    if (favorites === null) {
      favorites = [];
    }

    if (favorites.some((x) => x.name === this.recipie.name)) {
      favorites = favorites.filter((x) => x.name !== this.recipie.name);
    } else {
      favorites.push(this.recipie);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.onUpdateList();
  };

  onEditCancel = () => {
    this.edit = false;
  };

  onEdit = () => {
    console.log('editing');
    this.edit = true;
  };
}
