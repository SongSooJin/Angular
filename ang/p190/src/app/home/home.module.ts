import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from '../share/share.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { 
  constructor() {
    console.log('HomeModule # constructor()');
  }
}
