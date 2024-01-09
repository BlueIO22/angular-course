import { Component, Input } from '@angular/core';
import { Recipe } from '../app/app.component';
import { MealForm } from '../mealForm/mealForm.component';
import { CommonModule } from '@angular/common';

@Component({
  templateUrl: './manage.component.html',
  selector: 'manage',
  imports: [MealForm, CommonModule],
  standalone: true,
})
export class ManageComponent {
  @Input() recipie: Recipe;
  @Input() onUpdateList: () => void;

  edit: boolean = false;

  deleteRecipe = () => {
    let recipies = JSON.parse(localStorage.getItem('recipies'));
    recipies = recipies.filter((x) => x.name !== this.recipie.name);
    localStorage.setItem('recipies', JSON.stringify(recipies));
    this.onUpdateList();
  };

  manageRecipe = () => {};
}
