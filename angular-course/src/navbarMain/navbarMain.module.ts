import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MainNavbar } from './navbarMain.component';
@NgModule({
  declarations: [],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [MainNavbar],
})
export class AppModule {}
