import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class MyHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // 네이티브 엘리먼트에서 "focus" 이벤트가 발생 할 때
  // onFocus() 메소드를 기동시킨다.
  
  @HostListener('focus') 
  onFocus() { 
    // style = "background: yellow"
    this.renderer.setElementStyle(this.el.nativeElement, 'background', 'yellow'); 
  }

  @HostListener('blur') 
  onBlur() { 
    // style = "background: white"
    this.renderer.setElementStyle(this.el.nativeElement, 'background', 'white'); 
  }


}
