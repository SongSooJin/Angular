import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../share/share.module';

import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ShareModule
  ],
  declarations: [AComponent, BComponent]
})
export class UserModule {
  constructor() {
    console.log('UserModule # constructor()');
  }
 }
