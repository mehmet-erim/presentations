const standardTabs = ['HTML', 'TS'];

export const propertyBindingCodeSnippets = {
  basic: {
    codes: [
      `
<img bind-src="imageUrl" /> 
<img [src]="imageUrl">
`,
      `export class MyComponent {
    imageUrl = 'https://source.unsplash.com/user/erondu/350x350';
}`,
    ],
    tabs: standardTabs,
  },
  modifier: {
    codes: [
      `
<div class="rectangle" style="width: 100px; background-color: #9ee60c"></div>
<div class="rectangle" [style]="styles"></div>
<div class="rectangle" [style]="{width: '150px', backgroundColor: '#9ee60c'}"></div>
<div class="rectangle" [style.width]="'100px'" [style.background-color]="'orange'">100px</div>
<div class="rectangle" [style.backgroundColor]="'orange'"></div>
<div class="rectangle" [style.width.px]="100">100px</div>
<div class="rectangle" [style.width.%]="70">70%</div>
<div [class.rectangle]="false">not rectangle</div>
<div [class]="classes"></div>
`,
      `
styles = 'width: 100px; background-color: #eeeeee';
classes = 'rectangle bg-gray';
`,
    ],
    tabs: standardTabs,
  },

  propertyBindingAndInterpolation: {
    codes: [
      `
<img src="{{ itemImageUrl }}">
<img [src]="itemImageUrl">
    `,
    ],
    tabs: ['HTML'],
  },

  differenceAttributeProperty: {
    codes: [
      `
<button aria-label="Close">X</button>

<script>
  const element = document.querySelector('button');
  console.log(element.getAttribute('aria-label')) // "Close"
  console.log(element.ariaLabel) // "Close"
</script>
`,
    ],
    tabs: ['HTML'],
  },

  differenceAttributeProperty2: {
    codes: [
      `
<a href="/login" myattr="true">Login</a>

<script>
  const element = document.querySelector('a');
  console.log(element.getAttribute('myattr')) // "true"
  console.log(element.myattr) // undefined
</script>
`,
    ],
    tabs: ['HTML'],
  },

  differenceAttributeProperty3: {
    codes: [
      `
<table>
      <tr>
        <td colspan="5"></td>
      </tr>
</table>
<script>
  const element = document.querySelector('td');
  console.log(element.getAttribute('colspan')) // "5"
  console.log(element.colspan) // undefined
  console.log(element.colSpan) // 5 (number)
</script>
`,
    ],
    tabs: ['HTML'],
  },

  differenceAttributeProperty4: {
    codes: [
      `
<button>Submit</button>
<script>
const element = document.querySelector('button');
element.disabled = "disabled"

console.log(element.disabled) // true
console.log(element.getAttribute('disabled')) // ""
</script>
`,
    ],
    tabs: ['HTML'],
  },

  counter: {
    codes: [
      `
<app-counter></app-counter>
      
<app-counter [count]="myCount"></app-counter>
`,
      `
myCount = 5;
`,

      `
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-counter',
  template: \`
    <button (click)="decrement()">-</button>
    <span>{{count}}</span>
    <button (click)="increment()">+</button>
  \`
})
export class CounterComponent {
  @Input() count = 0;
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
      { label: 'HTML', lang: 'html' },
      { label: 'TS', lang: 'ts' },
      { label: 'app-counter', lang: 'ts' },
    ],
  },

  attrBinding: {
    codes: [
      `
<button [attr.aria-label]="btnLabel">X</button>
`,
      `
export class MyComponent {
    btnLabel = 'Close';
}
`,
    ],
    tabs: standardTabs,
  },

  propVsAttr: {
    codes: [
      `
<input [disabled]="!condition">
<input [attr.disabled]="condition ? 'disabled' : null">
`,
    ],
    tabs: ['HTML'],
  },
};
