import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { MyDataPipe } from './pipe/my-data.pipe';
import { MyHiddenDirective } from './directive/my-hidden.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { MyHighlightDirective } from './directive/my-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    MyDataPipe,
    MyHiddenDirective,
    CustomDirectiveComponent,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 서비스만 providers에서 한다.
// declarations : 화면조작은 여기에 들어감