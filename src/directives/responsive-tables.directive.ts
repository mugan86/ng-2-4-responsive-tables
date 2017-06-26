import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[responsi_tablesDirective]'
})
export class ResponsitablesDirective {

  constructor(private el: ElementRef) {
  }

}
