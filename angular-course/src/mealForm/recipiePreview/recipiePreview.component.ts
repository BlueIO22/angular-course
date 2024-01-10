import { CommonModule } from '@angular/common';
import { Component, Input, Directive } from '@angular/core';
import { Recipe } from '../../app/app.component';
import { ImageFallbackDirective } from '../../directives/imageFallback.component';

@Component({
  templateUrl: './recipiePreview.component.html',
  selector: 'recipie-preview',
  styleUrl: './recipiePreview.component.css',
})
export class RecipiePreview {
  @Input() recipie: Recipe;
}
