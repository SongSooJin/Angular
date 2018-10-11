import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' }, 
  { path: 'intro', component: IntroComponent }, 
  { path: 'hello', component: HelloComponent }, 
  { path: 'core-test', component: CoreTestComponent }, 
  { path: 'lazy/player', loadChildren: '../app/player/player.module#PlayerModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: 'URL문자열', loadChildren: 'app/모듈패스/모듈파일명#모듈클래스' }
//  모듈을 Lazy(필요할 때 처리) 로딩방식으로 사용하는 방법 
// Tip : lazy로딩방식을 테스트 서버가 제대로 변경감지하지 못한다.
// 그래서 이 경우, 테스트 서버를 재가동하면 된다.