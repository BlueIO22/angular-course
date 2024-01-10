import { provideFirebaseApp } from '@angular/fire/app';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { environment } from '../environments/environments';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
