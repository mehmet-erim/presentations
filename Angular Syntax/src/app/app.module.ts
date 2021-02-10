import { LOCALE_ID, NgModule } from '@angular/core';
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
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { DropdownDirective } from './dropdown.directive';
import { AngularLanguageServiceComponent } from './angular-language-service/angular-language-service.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { MyForDirective } from './my-for.directive';
import { PipesComponent } from './pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { SortPipe } from './sort.pipe';

registerLocaleData(tr);

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
    TwoWayBindingComponent,
    CounterComponent,
    TemplateVariablesComponent,
    DropdownDirective,
    AngularLanguageServiceComponent,
    NgTemplateComponent,
    StructuralDirectivesComponent,
    MyForDirective,
    PipesComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    AngularFullpageModule,
    DialogModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'tr' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
