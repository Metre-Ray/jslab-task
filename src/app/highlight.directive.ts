import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') date: string;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const now = new Date().getFullYear();
    const d = new Date(this.date).getFullYear();
    if ((now - d) >= 5) {
      this.el.nativeElement.style.border = '1px dotted red';
    }
    else if ((now - d) >= 2) {
      this.el.nativeElement.style.border = '1px dotted blue';
    }
    else {
      this.el.nativeElement.style.border = '1px dotted green';
    }
  }

}
