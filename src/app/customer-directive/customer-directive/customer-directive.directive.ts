import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[directiveYellow]',
})
export default class CustomerDirectiveDirective {
  constructor(private el: ElementRef<HTMLDivElement>) {
    this.el.nativeElement.style.color = 'red'
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'black'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'red'
  }

}
