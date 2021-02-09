const standardTabs = ['HTML', 'TS'];

export const structuralDirectivesCodeSnippets = {
  ngFor: {
    codes: [
      `
<div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackByFn">
  Index: {{i}}
  Hero: {{hero}}
  Odd: {{odd}}
</div>
`,
      `
heroes = ['Hulk', 'Wolverine', 'Iron Man'];
trackByFn: TrackByFunction<string> = (index: number, hero: string) => hero;
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
  let-odd="odd"
  [ngForTrackBy]="trackByFn"
>
  <div>Index: {{ i }}, Hero: {{ hero }}, Odd: {{ odd }}</div>
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
};
