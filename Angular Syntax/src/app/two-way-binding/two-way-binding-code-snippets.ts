const standardTabs = ['HTML', 'TS'];

export const twoWayBindingCodeSnippets = {
  custom: {
    codes: [
      `
<app-counter [(count)]="myCount"></app-counter>
<span (click)="myCount = myCount + 1">myCount: {{ myCount }}</span>
`,
      `
myCount = 1;
`,
      `

@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  \`
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();
  increment() {
    this.count = this.count + 1;
    this.countChange.emit(this.count);
  }
  decrement() {
    this.count = this.count - 1;
    this.countChange.emit(this.count);
  }
}
`,
      `
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="decrement()">-</button>
    <span>{{ count }}</span>
    <button (click)="increment()">+</button>
  \`,
})
export class CounterComponent {
  @Output() countChange = new EventEmitter<number>();
  private _count = 0;
  @Input()
  set count(value: number) {
    this._count = value;
    this.countChange.emit(value);
  }
  get count() {
    return this._count;
  }
  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
}

`,
    ],
    tabs: [
      ...standardTabs,
      { label: 'app-counter', lang: 'ts' },
      { label: 'app-counter-v2', lang: 'ts' },
    ],
  },

  ngModel: {
    codes: [
      `
<input type="number" [(ngModel)]="myCount" />
<span (click)="myCount = myCount + 1">myCount: {{ myCount }}</span>
      `,
    ],
    tabs: ['HTML'],
  },

  controlValueAccessor: {
    codes: [
      `
<app-counter [(ngModel)]="count"></app-counter>

<form [formGroup]="form">
<app-counter formControlName="count"></app-counter>
</form>
      `,
    ],
    tabs: ['HTML'],
  },
};
