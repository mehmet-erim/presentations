import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { Slide1Component } from './slide1/slide1.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DialogModule } from '@ngneat/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    Slide1Component,
    SlideTitleComponent,
    IntroductionComponent,
  ],
  imports: [BrowserModule, AngularFullpageModule, DialogModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
