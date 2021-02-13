import { standardTabs } from '../event-binding/event-binding-code-snippets';

export const ngTemplateCodeSnippets = {
  template: {
    codes: [
      `
  <button onclick="showHiddenContent()">Show hidden content</button>

  <template>
    <div>Hidden content</div>
  </template>
  
  <script>
    function showHiddenContent() {
      const temp = document.querySelector('template');
      const clone = temp.content.cloneNode(true);
      document.body.appendChild(clone);
    }
  </script>
  `,
    ],
    tabs: ['HTML'],
  },

  ngTemplate: {
    codes: [
      `
<ng-template>
    <button>Submit</button>
</ng-template>
        `,
    ],
    tabs: ['HTML'],
  },

  ngIf: {
    codes: [
      `
<div *ngIf="user else loading">
    {{user}}
</div>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
      
      `,
      `
user: string;
ngOnInit() {
    setTimeout(() => this.user = 'John Doe', 2000)
}
    `,
    ],
    tabs: standardTabs,
  },

  ngIfAttribute: {
    codes: [
      `
<ng-template [ngIf]="user" [ngIfElse]="loading">
    <div>
        {{user}}
    </div>
</ng-template>

<ng-template #loading>
    <div>Loading...</div>
</ng-template>
      
      `,
    ],
    tabs: ['HTML'],
  },

  ngContainer: {
    codes: [
      `
<ng-container>
    <button>Submit</button>
</ng-container>
        `,
    ],
    tabs: ['HTML'],
  },

  ngContainer2: {
    codes: [
      `
<div>
{{ user.name }}
<ng-container *ngIf="user.phoneNumber"> - {{ phoneNumber }}</ng-container>
</div>
        `,
    ],
    tabs: ['HTML'],
  },

  ngContainer3: {
    codes: [
      `
<ul>
    <li *ngFor="let user of users" *ngIf="user">{{user}}</li>
</ul>
<!-- ------------------- -->
<ul>
    <li *ngFor="let user of users">
        <ng-container *ngIf="user">
            {{user}}
        </ng-container>
    </li>
</ul>
        `,
      `
users = ['John Doe', null, 'Ervin Howell'];
        `,
    ],
    tabs: ['HTML', 'TS'],
  },

  ngTemplateOutlet: {
    codes: [
      `
<form id="my-form-1">
<!-- ...form1 fields -->
<ng-container *ngTemplateOutlet="submitBtnTemplate"></ng-container>
</form>
<form id="my-form-2">
<!-- ...form2 fields -->
<ng-container *ngTemplateOutlet="submitBtnTemplate"></ng-container>
</form>

<ng-template #submitBtnTemplate>
    <button type="submit" class="btn btn-primary btn-block btn-sm">Submit</button>
</ng-template>
          `,
    ],
    tabs: ['HTML'],
  },

  ngTemplateOutletContext: {
    codes: [
      `
<form id="my-form-1">
<!-- ...form1 fields -->
<ng-container *ngTemplateOutlet="submitBtnTemplate; context: {$implicit: 'bi bi-check text-success ml-1', isBtnPrimary: false}"></ng-container>
</form>
<form id="my-form-2">
<!-- ...form2 fields -->
<ng-container *ngTemplateOutlet="submitBtnTemplate; context: {isBtnPrimary: true}"></ng-container>
</form>

<ng-template #submitBtnTemplate let-iconClasses let-isPrimary="isBtnPrimary">
    <button type="submit" class="btn" [class.btn-primary]="isPrimary">
        Submit <i [ngClass]="iconClasses"></i>
    </button>
</ng-template>
          `,
    ],
    tabs: ['HTML'],
  },

  ngComponentOutlet: {
    codes: [
      `
<ng-container *ngComponentOutlet="counterComponent"></ng-container>
          `,
      `
import { CounterComponent } from '../counter/counter.component';

@Component(/* component metadata */)
export class MyComponent {
    counterComponent = CounterComponent;
}
          `,
    ],
    tabs: standardTabs,
  },

  viewContainerRef: {
    codes: [
      `
<ng-container #myContainer></ng-container>
<ng-template #myTemplate>👋</ng-template>
          `,
      `
@ViewChild('myContainer', {read: ViewContainerRef}) myContainerRef: ViewContainerRef
@ViewChild('myTemplate', {read: TemplateRef}) myTemplateRef: TemplateRef<any>;

ngOnInit() {
    this.myContainerRef.clear();
    this.myContainerRef.createEmbeddedView(this.myTemplateRef);
}
          `,
    ],
    tabs: standardTabs,
  },
};
