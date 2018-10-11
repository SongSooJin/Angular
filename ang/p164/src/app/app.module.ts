import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
// import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';

// import { IntroComponent } from './component/intro/intro.component';
// import { HelloComponent } from './component/hello/hello.component';
// import { CoreTestComponent } from './component/core-test/core-test.component';
import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HelloComponent,
    CoreTestComponent,

  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    AppRoutingModule,
    CoreModule.forRoot({ nickName: 'Happy' }), 
    MemberModule,
    // PlayerModule, 
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('AppModule # constructor() called.');
  }

}

// PlayerModule 을 eager 로딩과 동시에 lazy 로딩 방식으로 사용할 수 없습니다.




