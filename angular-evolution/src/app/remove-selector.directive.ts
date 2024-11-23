import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  inject,
} from '@angular/core';

@Directive({
  standalone: true,
})
export class RemoveSelectorDirective implements AfterViewInit {
  elRef = inject(ElementRef<HTMLElement>);

  ngAfterViewInit() {
    const element = this.elRef.nativeElement;
    const previousSibling = element.previousElementSibling;
    const parent = element.parentElement;

    if (previousSibling && parent) {
      // Insert the inner content of the element after the previous sibling
      previousSibling.insertAdjacentHTML('afterend', element.innerHTML);

      // Remove the original element
      element.remove();
    }
  }
}
