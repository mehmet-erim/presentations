import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <img
      [src]="source"
      [height]="height"
      [width]="width"
      (error)="error.emit()"
    />
  `,
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() source = 'assets/images/no-image.png';
  @Input() width = 150;
  @Input() height = 150;

  @Output() error = new EventEmitter<void>();
}
