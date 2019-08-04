import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseover') onMouseOver() {
    this.ChangeBackgroundColor("#eee");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBackgroundColor('#fff');
  }

  @HostListener('click') onClick() {
    this.ChangeBackgroundColor('#eee');
  }

  ChangeBackgroundColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
  }
}
