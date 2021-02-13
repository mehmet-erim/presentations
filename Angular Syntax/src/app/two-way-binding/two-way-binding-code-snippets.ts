const standardTabs = ['HTML', 'TS'];

export const twoWayBindingCodeSnippets = {
  syntax: {
    codes: [
      `
<element bindon-target="value"></value>
<element [(target)]="value"></element>
    `,
    ],
    tabs: ['HTML'],
  },

  syntax2: {
    codes: [
      `
<element [target]="value" (targetChange)="value = $event"></element>
    `,
    ],
    tabs: ['HTML'],
  },

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
    ],
    tabs: [...standardTabs, { label: 'app-counter', lang: 'ts' }],
  },

  ngModel: {
    codes: [
      `
<input type="number" [(ngModel)]="count" />
<span>count: {{ count }}</span> <button (click)="count = count + 1"></button>
      `,
      `
count = 5;
      `,
    ],
    tabs: standardTabs,
  },

  controlValueAccessor: {
    codes: [
      `
<app-counter [(ngModel)]="count"></app-counter>
      `,
    ],
    tabs: ['HTML'],
  },
};
