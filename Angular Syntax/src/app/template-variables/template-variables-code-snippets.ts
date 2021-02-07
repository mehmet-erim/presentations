const standardTabs = ['HTML', 'TS'];

export const templateVariablesCodeSnippets = {
  syntax: {
    codes: [
      `
<input #phone placeholder="Phone number" />
{{phone.value}}
                `,
    ],
    tabs: ['HTML'],
  },

  intro: {
    codes: [
      `
<button (click)="start(name, email)">Subscribe</button>
<input 
  #name 
  style="display: none;"
  placeholder="Name" 
  (keyup.enter)="email.focus()" />
<input 
  #email 
  style="display: none;" 
  placeholder="Email" 
  (keyup.enter)="subscribe()" />
                `,
      `
start(name: HTMLInputElement, email: HTMLInputElement) {
    name.style.display = 'block';
    email.style.display = 'block';
    name.focus();
}
subscribe() {}
                `,
      `
@ViewChild('name') nameRef: ElementRef<HTMLInputElement>;
@ViewChild('email') emailRef: ElementRef<HTMLInputElement>;
start() {
    this.nameRef.nativeElement.style.display = 'block';
    this.emailRef.nativeElement.style.display = 'block';
    this.nameRef.nativeElement.focus();
}
subscribe() {}
                `,
    ],
    tabs: [...standardTabs, { label: 'TSv2', lang: 'ts' }],
  },

  variableOnComponent: {
    codes: [
      `
<app-counter #counter></app-counter>
<button (click)="counter.reset()">Reset</button>
                `,
    ],
    tabs: ['HTML'],
  },

  directive: {
    codes: [
      `
  <div #dropdownRef="dropdown" [dropdown]="dropdownMenu">
  <button (click)="dropdownRef.toggle()">Toggle</button>
  <div #dropdownMenu>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</div>
                `,
      `
@Directive({
  selector: '[dropdown]',
  exportAs: 'dropdown',
})
export class DropdownDirective {
  @Input('dropdown') dropdownMenu: HTMLElement;
  toggle() {
    this.dropdownMenu.hidden = !this.dropdownMenu.hidden;
  }
}                
                `,
    ],
    tabs: ['HTML', { label: 'DropdownDirective', lang: 'ts' }],
  },
};
