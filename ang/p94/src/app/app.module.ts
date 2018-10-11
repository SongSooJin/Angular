import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'contact',component:ContactComponent},
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
