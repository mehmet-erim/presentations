const standardTabs = ['HTML', 'TS'];

export const propertyBindingCodeSnippets = {
  basic: {
    codes: [
      `
<img bind-src="mageUrl" /> 
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

  differenceAttributeProperty: {
    codes: [
      `
<a href="/login">Login</a>

<script>
  const element = document.querySelector('a');
  console.log(element.getAttribute('href')) // "/login"
  console.log(element.href) // "http://localhost:3000/login"
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

  image: {
    codes: [
      `<app-image></app-image>
      
<app-image [source]="'https://source.unsplash.com/user/erondu/150x150'">
</app-image>

<app-image source="https://source.unsplash.com/user/erondu/150x150">
</app-image>
`,

      `
@Component({
  selector: 'app-image',
  template: \`<img [src]="source" />\`
})
export class ImageComponent {
  @Input() source = 'assets/images/no-image.png';
}
`,
    ],
    tabs: [
      { label: 'HTML', lang: 'html' },
      { label: 'app-image', lang: 'ts' },
    ],
  },

  attrBinding: {
    codes: [
      `
<button [attr.aria-label]="btnLabel">{{ btnLabel }}</button>
<button [attr.aria-disabled]="disabled" [disabled]="disabled">Click me</button>
<tr><td [attr.colspan]="1 + 1"></td></tr>

<!-- Property binding -->

<button [ariaLabel]="btnLabel">{{ btnLabel }}</button>
<button [ariaDisabled]="disabled" [disabled]="disabled">Click me</button>
<tr><td [colSpan]="1 + 1"></td></tr>
`,
      `
export class MyComponent {
    btnLabel = 'Click me';
    disabled: boolean;
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
