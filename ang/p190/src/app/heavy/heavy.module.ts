import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeavyRoutingModule } from './heavy-routing.module';
import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';

@NgModule({
  imports: [
    CommonModule,
    HeavyRoutingModule
  ],
  declarations: [XComponent, YComponent]
})
export class HeavyModule {
  constructor() {
    console.log('lazy >> HeavyModule # constructor()');
  }
}
