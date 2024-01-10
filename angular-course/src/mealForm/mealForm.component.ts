import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ingredient, Recipe } from '../app/app.component';

@Component({
  templateUrl: './mealForm.component.html',
  styleUrl: './mealForm.component.css',
  imports: [CommonModule, FormsModule],
  standalone: true,
  selector: 'meal-form',
})
export class MealForm {
  @Input() mode: string = 'add';
  @Input() recipie: Recipe;
  @Input() onUpdateList: () => void;
  @Input() onEditCancel: () => void;

  name: string = '';
  description: string = '';
  imagePath: string = '';
  ingredients: Ingredient[] = [];
  showAlert: boolean = false;
  alertText: string = '';
  alertType: string = '';
  ingredient: string = '';

  ngOnInit() {
    if (this.mode === 'edit') {
      console.log(this.recipie);
      this.name = this.recipie.name;
      this.description = this.recipie.description;
      this.imagePath = this.recipie.imagePath;
      this.ingredients = this.recipie.ingredients;
    }
  }

  addIngredient = (event: any) => {
    if (event.key === 'Enter') {
      const splitted = event.target.value.split(',');
      if (this.ingredients.some((x) => x.name === splitted[0])) {
        return;
      }
      this.ingredients.push({
        name: splitted[0],
        amount: splitted[1] !== undefined ? splitted[1] : 1,
      });
      this.ingredient = '';
    }
  };

  createAlert = (text: string, type: string) => {
    this.showAlert = true;
    this.alertType = type;
    this.alertText = text;
  };

  clearForm = () => {
    this.name = '';
    this.description = '';
    this.imagePath = '';
    this.ingredient = '';
    this.ingredients = [];
  };

  removeIngredient = (name: string) => {
    this.ingredients = this.ingredients.filter((x) => x.name !== name);
  };

  editRecipie = () => {
    const recipie = {
      name: this.name,
      description: this.description,
      imagePath: this.imagePath,
      ingredients: this.ingredients,
    };
    this.showAlert = false;
    let recipies = [...JSON.parse(localStorage.getItem('recipies'))] ?? [];
    let foundRecipie = recipies.find((x) => x.name === recipie.name);
    foundRecipie = { ...recipie };
    recipies[recipies.findIndex((x) => x.name === recipie.name)] = foundRecipie;
    localStorage.setItem('recipies', JSON.stringify(recipies));
    this.createAlert('Oppskrift endret!', 'success');
    this.onUpdateList();
  };

  addRecipie = () => {
    const recipie = {
      name: this.name,
      description: this.description,
      imagePath: this.imagePath,
      ingredients: this.ingredients,
    };
    this.showAlert = false;
    let recipies = JSON.parse(localStorage.getItem('recipies')) ?? [];
    if (recipies.some((x) => x.name === recipie.name)) {
      this.createAlert('Oppskrift finnes allerede!', 'danger');
      return;
    }
    recipies.push(recipie);
    localStorage.setItem('recipies', JSON.stringify(recipies));
    this.clearForm();
    this.createAlert('Oppskrift lagd til!', 'success');
    this.onUpdateList();
  };
}
