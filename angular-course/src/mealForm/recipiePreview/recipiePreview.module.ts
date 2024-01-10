import { SharedModule } from '../../shared/shared.module';
import { ImageFallbackDirectiveModule } from './../../directives/imageFallback.module';
import { RecipiePreview } from './recipiePreview.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [RecipiePreview],
  imports: [SharedModule, ImageFallbackDirectiveModule],
  providers: [],
  bootstrap: [],
})
export class RecipiePreviewModule {}
