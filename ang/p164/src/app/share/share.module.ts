import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { MyUpperPipe } from './my-upper.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyUpperPipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ],
  declarations: [HighlightDirective, MyUpperPipe]
})
export class ShareModule {
  constructor() {
    console.log('ShareModule # constructor() called.');
  }
}
// CommonModule,FormsModule 모듈들을 export 하게되면
// ShareModule모듈을 임포트하는 특징 모듈에서 
// CommonModule,FormsModule 모듈들을 명시적으로 임포트 하지 않아도 
// 사용할 수 있게 된다.