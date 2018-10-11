import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataShareService } from './data-share.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataShareService]
})
export class ShareModule {
  constructor() {
    console.log('ShareModule # constructor()');
  }
}
