

// ng g c customDirective -t -s --spec false 
// -t -s --spce false 
// -t : template 파일을 만들지 않는다. (html)
// -s : style 파일을 만들지 않느다. (css)
// --spec false : spec.ts파일을 만들지 않는다.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `
    <h1>Welcome</h1> 
    <h1 myHidden>Hidden Welcome</h1> 
    <br><br>
    <div>   
      <input type="text" placeholder="name"> 
    </div> <br>
    <div>
      <input type="email" placeholder="email" myHighlight> 
    </div> <br> 
    <div>   <input type="tel" placeholder="tel" myHighlight> </div> 
  `,
  styles: []
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
