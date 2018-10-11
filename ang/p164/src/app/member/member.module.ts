import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MemberRoutingModule } from './member-routing.module';
import { HighlightDirective } from './highlight.directive';

import { MemberService } from './member.service';

import { ShareModule } from '../share/share.module';
import { MemberListComponent } from './member-list.component'; 

@NgModule({
  imports: [
    CommonModule, FormsModule,
    MemberRoutingModule,
    ShareModule
  ],
  declarations: [HighlightDirective,MemberListComponent],
  providers: [MemberService],
  exports: []
})
export class MemberModule {
  constructor() {
    console.log('MemberModule # constructor() called.');
  }

}
// providers: [MemberService] 
// 화면 처리 기술이 아닌 서비스는 exports 항목에 명시하지 않아도
// 자동으로 export 처리가 된다.

// MemberModule에 이미 HighlightDirective가 존재하는데 
// ShareModule에도 같은 이름의 HighlightDirective가 존재한다. 
// 이 경우, 모듈 자신의 디렉티브가 사용된다.
// import { ShareModule } from '../share/share.module';  