import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { Slide1Component } from './slide1/slide1.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DialogModule } from '@ngneat/dialog';
import { Slide2Component } from './slide2/slide2.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    Slide1Component,
    SlideTitleComponent,
    IntroductionComponent,
    Slide2Component,
  ],
  imports: [BrowserModule, AngularFullpageModule, DialogModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
