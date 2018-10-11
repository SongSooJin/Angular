import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: '**', component: HomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// import RouterModule 시점에는 RouterModule은 라우팅 기능만 존재하고 
// 라우팅 처리방법인 라우팅 설정정보는 없는 상태이다.
// 
// RouterModule.forRoot(routes) 시점에는
// 개발자가 설정한 라우팅 처리방법인 라우팅 로직을 배열로 담아
// RouterModule에 건네주었으므로 RouterModule은 이제 
// 라우팅 기능 + 라우팅 처리방법을 모두 알고 있는 상태가 된다. 
// 
//exports RouterModule 설정을 추가하면 
// AppModule이 AppRoutigModule 을 imports 처리할때
// 더불어서 RouterModule 모듈까지 같이 처리된다는 뜻이다.