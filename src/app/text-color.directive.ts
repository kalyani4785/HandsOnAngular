import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: false
})
export class TextColorDirective {
  @Input() textColor: string ='';
  constructor(private el: ElementRef) { }

  ngOnChanges(){
    this.changeTextColor(this.textColor);
  }

  changeTextColor(color: string){
    this.el.nativeElement.style.color = color;
  }

}
