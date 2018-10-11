import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
// 생성자 함수

// TIP : 주석은 여기서 아래쪽으로 달아야 한다.
// 그렇지 않으면, ng generate 명령 사용시 에러 발생
// @NgModule : 형태의 키워드는 자바에서 Annotation 이라고 부르던 문법이다.
// 앵귤러는 이것을 Decorator 라고 부른다.
// 자바의 에노테이션이 클래스이듯이 앵귤러의 데코레이터는 함수이다.
// 즉, @NgModule({}) 문법은 NgModule 함수를 호출하면서 객체를 전달한다는 뜻이다.
// 객체의 내용으로 미리 정해진 프로퍼티키를 사용하여 값을 설정하면 NgModule 객체에
// 동적으로 코드를 추가하는 방식이다. 이러한 기법을 선언적인 프로그래밍이라고 부른다.
// 이런 기술의 도입 목적은 코딩작성을 줄여서 개발자 피로도를 감소시키고 비개발자인 
// 디자이너도 사용할 수 있는 길을 열기 위함이다.
// AppModule 생성자 함수를 new해서 객체로 만들고 처리하는 작업은 개발자 대신 
// 앵귤러 프레임워크 코드가 대신한다.
/*
{
  declarations: [  // 화면 처리 기술 : component, directive, pipe
    AppComponent 
  ],
  imports: [ // 다른 모듈의 자원을 사용할 때, 해당 모듈을 선언한다.
    BrowserModule
  ],
  providers: [], // 공통 로직 : Service
  bootstrap: [AppComponent] // 시작화면에서 사용할 화면기술(component)을 지정 
}
*/


