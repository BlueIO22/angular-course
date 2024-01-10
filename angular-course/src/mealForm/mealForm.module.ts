import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MealForm } from './mealForm.component';
import { RecipiePreviewModule } from './recipiePreview/recipiePreview.module';
import { SharedModule } from '../shared/shared.module';
import { firebaseProviders } from '../providers/firestoreProvider';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environments';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
@NgModule({
  declarations: [MealForm],
  imports: [SharedModule, RecipiePreviewModule],
  providers: [],
  bootstrap: [MealForm],
})
export class MealFormModule {}
