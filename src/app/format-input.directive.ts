import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFormatInput]'
})
export class FormatInputDirective {
  @Input('appFormatInput') format; 
  @HostListener('focus') onfocus(){
    console.log('my inpuusus');
  }
  @HostListener('blur') onBlur(){
    var value = this.el.nativeElement.value;

    if(this.format === 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else 
    this.el.nativeElement.value = value.toUpperCase();
  }
  constructor(private el: ElementRef) { }

}
