import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Recipe } from '../app/app.component';
import { ManageComponent } from '../manage/manage.component';

@Component({
  templateUrl: './mealDisplay.component.html',
  styleUrl: './mealDisplay.component.css',
  imports: [CommonModule, ManageComponent],
  selector: 'meal-display',
  standalone: true,
})
export class MealDisplay {
  @Input() recipie: Recipe;
  @Input() onUpdateList: () => void;
}
