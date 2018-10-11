import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentDetailComponent } from './experiments/experiment-detail/experiment-detail.component';

import { StateService } from './common/state.service';
import { ExperimentsService } from './common/experiments.service';

//  Routing 로직 :
// URL에 따라서 어떤 리소스 또는 로직을 기동해서 결과를 표시 할것인지
// 결정하는 로직
const appRoutes: Routes = [
  // 도메인 /home 이라는 URL 일때, router-outlet 지점에 
  // HomeComponent 화면을 배치한다.
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experiments', component: ExperimentsComponent },
  // ''의 의미는  "/" 의미로 생각하세요
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // '**'의 의미는 위에서 아무도 처리하지 않으면 기동한다.
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    BrowserModule, CommonModule, HttpModule, FormsModule,
    // RouterModule 클래스가 제공하는 static 메소드 forRoot 에게 
    // 라우팅 로직을 담은 배열을 건네주면 라우팅처리가 적용된다.
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperimentsComponent, ExperimentDetailComponent
  ],
  // providers : 등록한 서비스들을 모듈 처리시 앵귤러가 객체로 만들고
  // 그것을 모듈레벨의 컨테이너에 보관한다.
  // 서비스는 전체 프로그램에 단 1개만 만들고 재사용한다.
  providers: [ExperimentsService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AppModule 모듈은 직접 5개의 컴포넌트를 갖고있다.






