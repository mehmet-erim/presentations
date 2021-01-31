const standardTabs = ['HTML', 'TS'];

export const propertyBindingCodeSnippets = {
  basic: {
    codes: [
      `
<img [src]="imageUrl">
<button [disabled]="disabled">Disabled Button</button>      
`,
      `export class MyComponent {
    imageUrl = 'https://source.unsplash.com/user/erondu/350x350';
    disabled = true;
}`,
    ],
    tabs: standardTabs,
  },
  modifier: {
    codes: [
      `
<div class="rectangle" [style.width]="'100px'" [style.background]="'orange'">100px</div>
<div class="rectangle" [style.width.px]="100">100px</div>
<div class="rectangle" [style.width.vw]="40">40vw</div>
<div class="rectangle" [style.width.%]="70">70%</div>
<div class="rectangle" [style]="{width: '150px', height: '150px'}"></div>
<div class="rectangle" [style]="'width: 100px; height: 100px'"></div>
<div [class.rectangle]="true"></div>
<div [class]="'rectangle'"></div>
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
  template: \`<img [src]="source" [height]="height" [width]="width" />\`
})
export class ImageComponent {
  @Input() source = 'assets/images/no-image.png';
  @Input() width = 150;
  @Input() height = 150;
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
<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
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
