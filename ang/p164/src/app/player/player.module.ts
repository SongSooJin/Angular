import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { ShareModule } from '../share/share.module';

import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ShareModule
  ],
  declarations: [PlayerComponent]
})
export class PlayerModule {
  constructor() { 
    console.log('PlayerModule # constructor() called.'); 
    console.log(new Date().toLocaleString()); 
  }
}
// 이 모듈은 루트모듈이 아니므로 명시적으로 CommonModule 모듈을 임포트해야 한다.
// BrowserModule 모듈 임포트가 되어있지 않으므로 위처럼 처리해야 한다.