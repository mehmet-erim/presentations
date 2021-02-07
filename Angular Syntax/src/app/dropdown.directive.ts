import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[dropdown]',
  exportAs: 'dropdown',
})
export class DropdownDirective {
  @Input('dropdown') dropdownMenu: HTMLElement;

  constructor() {}

  toggle() {
    this.dropdownMenu.hidden = !this.dropdownMenu.hidden;
  }
}
