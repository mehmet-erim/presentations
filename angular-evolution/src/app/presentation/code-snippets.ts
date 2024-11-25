export const angular13AppModule = `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

export const angular13AppRouting = `
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
`;

export const angular13customersModule = `
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list.component';
import { CustomersDetailComponent } from './customers-detail.component';
import { CustomersEditComponent } from './customers-edit.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    CustomersDetailComponent,
    CustomersEditComponent,
    SharedModule, (highlight et)
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
`;

export const angular13customerListComponent = `
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListComponent implements OnInit {
  loading = false;
  customers: Customer[] = [];

  constructor(
    private customersService: CustomersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.customersService
      .getCustomers()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cdr.markForCheck();
        })
      )
      .subscribe((customers) => {
        this.customers = customers;
        this.cdr.markForCheck();
      });
  }
}
`;


export const codeSnippets = {
  angular13AppModule,
  angular13AppRouting,
  angular13customersModule,
  angular13customerListComponent,
};
