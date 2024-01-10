import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: 'img[fallback]',
})
export class ImageFallbackDirective {
  @Input() fallback: string;
  @HostBinding('src') src: string;
  @HostListener('error')
  loadFallbackOnError() {
    console.log('error');
    this.src =
      this.fallback ||
      'https://www.eatright.org/-/media/images/eatright-landing-pages/foodgroupslp_804x482.jpg?as=0&w=967&rev=d0d1ce321d944bbe82024fff81c938e7&hash=E6474C8EFC5BE5F0DA9C32D4A797D10D';
  }

  constructor() {}
}
