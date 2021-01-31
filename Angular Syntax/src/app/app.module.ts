import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { SlideTitleComponent } from './slide-title/slide-title.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DialogModule } from '@ngneat/dialog';
import { NgIfComponent } from './ng-if/ng-if.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ImageComponent } from './image/image.component';
import { RouterModule } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    InterpolationComponent,
    SlideTitleComponent,
    IntroductionComponent,
    NgIfComponent,
    PropertyBindingComponent,
    ImageComponent,
    EventBindingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AngularFullpageModule,
    DialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
