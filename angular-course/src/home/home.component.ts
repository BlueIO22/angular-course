import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Oppskrifter';
  description = 'Finn gode oppskrifter som passer til deg';
}
