import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[jhiRandomColorClass]'
})
export class RandomColorClassDirective {

  classes =  ['blue' ,'pink', 'red'];
  constructor(el: ElementRef) {
    el.nativeElement.className += ' ' + this.classes[Math.floor(Math.random()*3)];
  }

}
