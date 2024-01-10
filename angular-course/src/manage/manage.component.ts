import { Component, Input, inject, OnInit } from '@angular/core';
import { Recipe } from '../app/app.component';
import { Firestore, collection, getDocs } from 'firebase/firestore';

@Component({
  templateUrl: './manage.component.html',
  selector: 'manage-component',
})
export class ManageComponent implements OnInit {
  @Input() recipie: Recipe;
  @Input() favorite: boolean = false;
  @Input() onUpdateList: () => void;
  @Input() onEdit: () => void;
  @Input() onEditCancel: () => void;

  firestore = inject(Firestore);

  ngOnInit() {
    getDocs(collection(this.firestore, 'recipies')).then((snapshot) => {
      console.log(snapshot);
    });
  }

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

    let favorites = JSON.parse(localStorage.getItem('favorites'));
    favorites = favorites.filter((x) => x.name !== this.recipie.name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.onUpdateList();
  };
}
