import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XComponent } from './x/x.component';
import { YComponent } from './y/y.component';

const routes: Routes = [
  // <a routerLink="lazy">heavy x</a>
  {path:'', component: XComponent },
  //<a routerLink="lazy/y">heavy y</a>
  {path:'y', component: YComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeavyRoutingModule { }
