const standaloneComponent = `
  @Component({
    selector: "my-standalone-component",
    template: \`my-standalone-component-works!\`,
    standalone: true,
    imports: [MyStandaloneDirective, MyStandalonePipe]
  })
  export class MyStandaloneComponent {}

`;

const standaloneDirective = `
  @Directive({
    selector: "my-standalone-directive",
    standalone: true
  })
  export class MyStandaloneDirective {}

`;

const standalonePipe = `
  @Pipe({
    selector: "myStandalonePipe",
    standalone: true
  })
  export class MyStandalonePipe {}
  
`;

const appRoutes = `
export const ROUTES: Route[] = [
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin-routes').then(mod => mod.ADMIN_ROUTES)
  },
  { 
    path: 'customer',
    loadChildren: () => import('./customer/customer-routes')
  },
  // ...
];
`;

const adminRoutes = `
export const ADMIN_ROUTES: Route[] = [
  {path: 'home', component: AdminHomeComponent},
  {path: 'users', component: AdminUsersComponent},
];
`;

const customerRoutes = `
export default [
  {
    path: '',
    loadChildren: () => import('./customer-list.component').then(mod => mod.CustomerListComponent)
  },
]
`;

const sharedModule = `
// shared.module.ts

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    FontAwesomeModule,
    ScrollingModule,
    NgxLoadingModule,
    NzModalModule,
    NzMessageModule,
    NzRadioModule,
    NzDropDownModule,
    NzToolTipModule,
    NzInputModule,
    IosContextMenuDirectiveModule,
    CsharpDatePipeModule,
    InputMaskModule,
    TreeFilterComponent,
    KeyupDebounceDirective,
    ProductCodeSearchModalContentComponentModule,
    DebtModalComponent,
    DrawerModule,
    NzTreeModule,
    NzDatePickerModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    FontAwesomeModule,
    ScrollingModule,
    NgxLoadingModule,
    NzModalModule,
    NzMessageModule,
    NzRadioModule,
    NzDropDownModule,
    NzToolTipModule,
    NzInputModule,
    IosContextMenuDirectiveModule,
    CsharpDatePipeModule,
    InputMaskModule,
    TreeFilterComponent,
    KeyupDebounceDirective,
    ProductCodeSearchModalContentComponentModule,
    DebtModalComponent,
    CurrencyTypePipe,
    ReturnCartStatePipe,
    ReturnTypePipe,
    BrandFilterPipe,
    CustomerFilterPipe,
    CustomerListFilterPipe,
    CustomerReportFilterPipe,
    ReplacePipe,
    SelectCustomerComponent,
    CustomerListItemComponent,
    HeaderComponent,
    FooterComponent,
    BirthdayComponent,
    ApplicationLayoutComponent,
    BannerComponent,
    ReturnBox,
    ClickOutsideDirective,
    EllipsisDirective,
    AutofocusDirective,
    TimeStampPipe,
    DatatableClientSideSortDirective,
    UserInfoComponent,
    TooltipPipe,
    FindVisibleColumnPipe,
    TargetPriceCardComponent,
    ContractsComponent,
    FormatMoneyPipe,
    RemoveStarsDirective
  ],
  declarations: [
    CurrencyTypePipe,
    ReturnCartStatePipe,
    ReturnTypePipe,
    BrandFilterPipe,
    CustomerFilterPipe,
    CustomerListFilterPipe,
    CustomerReportFilterPipe,
    ReplacePipe,
    SelectCustomerComponent,
    CustomerListItemComponent,
    HeaderComponent,
    FooterComponent,
    BirthdayComponent,
    ApplicationLayoutComponent,
    BannerComponent,
    ReturnBox,
    ClickOutsideDirective,
    EllipsisDirective,
    AutofocusDirective,
    TimeStampPipe,
    DatatableClientSideSortDirective,
    UserInfoComponent,
    TooltipPipe,
    FindVisibleColumnPipe,
    TargetPriceCardComponent,
    ContractsComponent,
    FormatMoneyPipe,
    RemoveStarsDirective
  ],
  providers: [
    CustomerFilterPipe,
    CustomerListFilterPipe,
    CustomerReportFilterPipe,
    TimeStampPipe,
    CsharpDatePipe,
    TooltipPipe,
    FindVisibleColumnPipe,
    DateFormatPipe
  ]
})
export class SharedModule {}
`;

const scamCustomerList = `
// customer-list.component.ts

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent {}

@NgModule({
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    SubmitButtonDirectiveModule
  ],
  declarations: [CustomerListComponent],
})
export class CustomerListComponentModule {}
`;

const scamSubmitButtonDirective = `
// submit-button.directive.ts

@Directive({
  selector: '[appSubmitButton]',
})
export class SubmitButtonDirective {}

@NgModule({
  declarations: [SubmitButtonDirective],
  exports: [SubmitButtonDirective],
})
export class SubmitButtonDirectiveModule {}
`;

const mainConfiguration = `
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withInterceptors([customInterceptor]),
    ),
    provideAnimations(),
    provideLocale('tr-TR'),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
}).catch((err) => console.error(err));
`;

const complexStandaloneComponent = `
@Component({
  standalone: true,
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule, 
    SubmitButtonDirective,
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    CurrencyTypePipe,
    DateFormatPipe,
    TreeFilterComponent,
    CustomerFilterPipe,
  ],
  providers: [CustomerService, DateTimeService],
})
export class CustomerListComponent {}


`;

const appConfigWithAllOptions = `
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  provideExperimentalCheckNoChangesForDebug,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withDisabledInitialNavigation,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withNavigationErrorHandler,
  withPreloading,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptors,
  withFetch,
  withInterceptorsFromDi,
  withJsonpSupport,
  withNoXsrfProtection,
  withRequestsMadeViaParent,
  withXsrfConfiguration,
} from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalCheckNoChangesForDebug({ useNgZoneOnStable: true }),
    provideExperimentalZonelessChangeDetection(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withDebugTracing(),
      withHashLocation(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withNavigationErrorHandler((error) =>
        console.error('Router Error:', error),
      ),
      withPreloading(PreloadAllModules),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withViewTransitions(),
      withComponentInputBinding(),
      withDisabledInitialNavigation(),
    ),
    provideHttpClient(
      withInterceptors([]),
      withInterceptorsFromDi(),
      withRequestsMadeViaParent(),
      withFetch(),
      withJsonpSupport(),
      withNoXsrfProtection(),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      }),
    ),
    provideAnimations(),
    provideClientHydration(),
    provideNoopAnimations(),
  ],
};
`;

export const standaloneCodeSnippets = {
  standaloneComponent,
  standaloneDirective,
  standalonePipe,
  sharedModule,
  appRoutes,
  adminRoutes,
  customerRoutes,
  scamCustomerList,
  scamSubmitButtonDirective,
  mainConfiguration,
  complexStandaloneComponent,
  appConfigWithAllOptions,
};
