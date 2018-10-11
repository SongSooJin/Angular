import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/Forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
