import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
})
export class NgIfComponent {
  tabs = ['HTML', 'TS'];

  onlyHtmlTab = ['HTML'];

  codes = [
    `
<button (click)="isTextVisible = !isTextVisible">
  {{ isTextVisible ? "Hide" : "Show" }}
</button>

<p *ngIf="isTextVisible">Lorem ipsum dolor sit amet.</p>
`,
    `
@Component(/* component metadata */)
export class MyComponent {
  isTextVisible = true;
}
`,
  ];

  orConditionCodes = [
    `
<p *ngIf="condition1 || condition2">Lorem ipsum dolor sit amet.</p>
`,
  ];

  andConditionCodes = [
    `
<p *ngIf="condition1 && condition2">Lorem ipsum dolor sit amet.</p>
`,
  ];

  templateCodes = [
    `
<button (click)="isTextVisible = !isTextVisible">
  {{ isTextVisible ? "Hide" : "Show" }}
</button>

<ng-template [ngIf]="isTextVisible">
  <p>Lorem ipsum dolor sit amet.</p>
</ng-template>
`,
    `
@Component(/* component metadata */)
export class MyComponent {
  isTextVisible = true;
}
`,
  ];

  isTextVisible = true;
}
