export const standardTabs = ['HTML', 'TS'];

export const eventBindingCodeSnippets = {
  javascriptEvents: {
    codes: [
      `
<button onclick="onClick()">Click me</button>

<script>
  function onClick() {
    console.log('clicked')
  }
</script>
      `,
    ],
    tabs: ['HTML'],
  },
  javascriptEvents2: {
    codes: [
      `
<button>Click me</button>

<script>
  function onClick(event) {
    console.log(event) // mouse event
  }

  const element = document.querySelector('button');
  element.addEventListener('click', onClick);
  // removeEventListener ??
</script>
      `,
    ],
    tabs: ['HTML'],
  },

  syntax: {
    codes: [
      `
<button on-click="onClick($event)">Click me</button>    
<button (click)="onClick($event)">Click me</button>
    `,
      `
onClick(event: MouseEvent) {
  event.preventDefault();
}
    `,
    ],
    tabs: standardTabs,
  },
  basic: {
    codes: [
      `
<button (mouseover)="onMouseOver($event)">Hover me</button>

<input
  placeholder="Type here" 
  (input)="onInput($event)"/>  
`,
      `
onMouseOver(event: MouseEvent) {
  event.preventDefault();
}
onInput(event: KeyboardEvent) {
  console.log(event)
}
`,
    ],
    tabs: standardTabs,
  },

  keyFilter: {
    codes: [
      `
<input
  placeholder="Type here"
  (keyup.enter)="submit($event)"
  (keydown.esc)="cancel($event)"
/>
`,
      `
submit(event: KeyboardEvent) {
  console.log(event);
}
cancel(event: KeyboardEvent) {
  console.log(event);
}
      `,
      `
document.querySelector('input').addEventListener('keyup', function (event) {
  if (e.key === 'Enter') {
    console.log(event);
  }
});
`,
    ],
    tabs: [...standardTabs, { label: 'JS', lang: 'js' }],
  },

  keyFilter2: {
    codes: [
      `
<textarea 
  (keyup.control.enter)="submit($event)" 
  placeholder="Type here">
</textarea>
`,
      `
submit(event: KeyboardEvent) {
  console.log(event);
}
      `,
      `
document.querySelector('textarea')
  .addEventListener('keyup', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
      submit(event)
    }
});
`,
    ],
    tabs: [...standardTabs, { label: 'JS', lang: 'js' }],
  },

  customEvents: {
    codes: [
      `
<app-counter (countChange)="onCountChange($event)"></app-counter>

myCount: {{ myCount }}
`,
      `
myCount = 3;

onCountChange(count: number) {
  this.myCount = count;
}
`,
      `
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="decrement()">-</button>
    <span>{{count}}</span>
    <button (click)="increment()">+</button>
  \`
})
export class CounterComponent {
  @Output() countChange = new EventEmitter();
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
