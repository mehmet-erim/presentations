const standardTabs = ['HTML', 'TS'];

export const structuralDirectivesCodeSnippets = {
  ngFor: {
    codes: [
      `
<ul>
  <li *ngFor="let hero of heroes; let i = index;">
    {{i + 1}}. {{hero}}
  </li>
</ul>
`,
      `
heroes = ['Hulk', 'Wolverine', 'Iron Man'];
`,
    ],
    tabs: standardTabs,
  },

  ngForOf: {
    codes: [
      `
<ng-template
  ngFor
  [ngForOf]="heroes"
  let-hero
  let-i="index"
>
  <ul>
    <li>
      {{i + 1}}. {{hero}}
    </li>
  </ul>
</ng-template>
`,
    ],
    tabs: ['HTML'],
  },

  myFor: {
    codes: [
      `
<div *myFor="let hero of heroes; let i = index; let odd = odd; trackBy: trackByFn">
  Index: {{ i }}, Hero: {{ hero }}, Odd: {{ odd }}
</div>
`,
      `
@Directive({
  selector: '[myFor]',
})
export class MyForDirective {
  @Input('myForOf')
  items: any[];

  @Input('myForTrackBy')
  trackBy: TrackByFunction<any>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  private applyChanges() {
    this.viewContainerRef.clear();
    this.items.forEach((item, i) => {
      this.viewContainerRef.createEmbeddedView(
        this.templateRef, 
        {
          $implicit: item,
          index: i,
          odd: !!(i % 2),
      });
    });
  }

  ngOnChanges() {this.applyChanges()}
}
`,
    ],
    tabs: ['HTML', { label: 'MyForDirective', lang: 'ts' }],
  },

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
};
