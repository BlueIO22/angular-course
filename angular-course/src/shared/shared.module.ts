import { CommonModule } from '@angular/common';
import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environments';

@NgModule({
  declarations: [],
  imports: [FormsModule, BrowserModule, CommonModule],
  exports: [FormsModule, BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
