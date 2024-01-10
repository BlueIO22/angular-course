import { Component, Input, NgModule } from '@angular/core';
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
  @Input() favorite: boolean = false;
  @Input() onUpdateList: () => void;
  @Input() onEdit: () => void;
  @Input() onEditCancel: () => void;

  edit: boolean = false;

  editCancel = () => {
    this.edit = false;
    this.onEditCancel();
  };

  editRecipie = () => {
    this.edit = true;
    this.onEdit();
  };

  deleteRecipe = () => {
    let recipies = JSON.parse(localStorage.getItem('recipies'));
    recipies = recipies.filter((x) => x.name !== this.recipie.name);
    localStorage.setItem('recipies', JSON.stringify(recipies));
    this.onUpdateList();
  };
}
