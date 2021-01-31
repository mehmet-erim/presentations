import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  @Input() tabs: string[] | { label: string; lang: string } = [];
  @Input() codes: string[] = [];
  @Input() output: TemplateRef<any>;
  @Input() extras: { tab: string; output: TemplateRef<any> }[] = [];

  @Input() selectedTab: string | number = 0;

  ngAfterViewInit() {}
}
