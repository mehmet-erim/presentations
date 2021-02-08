export const standardTabs = ['HTML', 'TS'];

export const eventBindingCodeSnippets = {
  basic: {
    codes: [
      `
<button (click)="onSave()">Save</button>
<button (click)="onClick($event)">Click me</button>

Input value: {{ inputValue }}
<input
  placeholder="Type here" 
  (input)="inputValue = $event.target.value"
  (keypress)="onKey($event)"/>  
`,
      `
inputValue = '';
onSave() {
  alert('save');
}
onClick(event: MouseEvent) {
  alert('clicked');
}
onKey(event: KeyboardEvent) {
  console.log(event)
}
`,
    ],
    tabs: standardTabs,
  },

  modifiers: {
    codes: [
      `
Keyword: {{ keyword }}
<input
type="search"
placeholder="Enter a keyword..."
(keyup.enter)="search($event.target.value)"
/>
`,
      `
keyword = '';
search(keyword: string) {
  this.keyword = keyword;
}
      `,
    ],
    tabs: standardTabs,
  },

  customEvents: {
    codes: [
      `
@Component({
  selector: 'app-image',
  template: \`<img [src]="source" (error)="error.emit()" />\`
})
export class ImageComponent {
  @Input() source = 'assets/images/no-image.png';
  @Output() error = new EventEmitter<void>();
}
`,
      `
<app-image [source]="imgSrc" (error)="onError()">
</app-image>
`,
      `export class MyComponent {
  imgSrc = 'https://example.com/no-image.jpg'

  onError() {
    this.imgSrc = 'assets/images/no-image.png'
  }
}`,
    ],
    tabs: [
      { label: 'app-image', lang: 'ts' },
      { label: 'HTML', lang: 'html' },
      { label: 'TS', lang: 'ts' },
    ],
  },

  customEventsWithSubjects: {
    codes: [
      `
@Component({
  selector: 'app-card',
  template: \`
<div class="card">
  <ng-content></ng-content> 
</div>\`
})
export class CardComponent {
  @Output() init = new BehaviorSubject(true);
}
`,
      `
<app-card *ngIf="condition" (init)="onCardInit()">
  <div class="card-content">
    <h3>Card Title</h3>
    Card body
  </div>
</app-card>
`,
      `export class MyComponent {
  onCardInit() {
    console.log('app-card initialized!');
  }
}`,
    ],
    tabs: [
      { label: 'app-card', lang: 'ts' },
      { label: 'HTML', lang: 'html' },
      { label: 'TS', lang: 'ts' },
    ],
  },
};
