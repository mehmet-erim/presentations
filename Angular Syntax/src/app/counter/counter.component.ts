import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button class="btn" (click)="decrement()">-</button>
    <span style="font-size: 30px; margin-left: 10px; margin-right: 10px">{{
      count
    }}</span>
    <button class="btn" (click)="increment()">+</button>
  `,
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Output() countChange = new EventEmitter<number>();
  private _count = 0;
  @Input()
  set count(value: number) {
    this._count = value;
    this.countChange.emit(value);
  }
  get count() {
    return this._count;
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  reset() {
    this.count = 1;
  }
}
