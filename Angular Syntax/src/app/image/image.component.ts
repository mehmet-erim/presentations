import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: ` <img [src]="source" [height]="height" [width]="width" /> `,
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() source = 'assets/images/no-image.png';
  @Input() width = 150;
  @Input() height = 150;
}
