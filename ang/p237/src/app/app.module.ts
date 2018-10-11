import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/Forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KpopComponent } from './kpop/kpop.component';

import { KpopHttpService } from './kpop/kpop-http.service';
import { StudentComponent } from './student/student.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    KpopComponent,
    StudentComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [KpopHttpService,StudentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


















