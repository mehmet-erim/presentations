import {
  Directive,
  Input,
  TemplateRef,
  TrackByFunction,
  ViewContainerRef,
} from '@angular/core';

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
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: i,
        odd: !!(i % 2),
      });
    });
  }

  ngOnChanges() {
    this.applyChanges();
  }
}
