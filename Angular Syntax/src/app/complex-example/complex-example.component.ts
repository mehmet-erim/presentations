import {
  Component,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import { Observable } from 'rxjs';
import { standardTabs } from '../event-binding/event-binding-code-snippets';

@Component({
  selector: 'app-complex-example',
  templateUrl: './complex-example.component.html',
  styleUrls: ['./complex-example.component.scss'],
})
export class ComplexExampleComponent {
  codes = [
    `
    <nav class="desktop-menu">
    <ng-container
      *ngTemplateOutlet="
        menuItems;
        context: { $implicit: 'vertical', showIcons: true }
      "
    ></ng-container>
  </nav>
  
  <nav class="mobile-menu">
    <ng-container
      *ngTemplateOutlet="
        menuItems;
        context: {
          $implicit: 'horizontal',
          showIcons: false,
          reverse: true,
          hideSearch: true
        }
      "
    ></ng-container>
  </nav>
  
  <ng-template
    #menuItems
    let-menuClasses
    let-showIcons="showIcons"
    let-hideSearch="hideSearch"
    let-reverse="reverse"
  >
    <input
      *ngIf="!hideSearch"
      type="search"
      [(ngModel)]="keyword"
      (keyup.enter)="search()"
    />
  
    <ul
      [class]="menuClasses"
      (mouseover)="onMouseOver($event)"
    >
      <ng-container
        *ngFor="
          let item of menuItems$ | async | sort: reverse;
          let i = index;
          let odd = odd;
          trackBy: trackByFn
        "
      >
        <li
          *ngIf="item.isVisible"
          [id]="item.id"
          class="menu-item"
          [class.bg-gray]="odd"
        >
          <i *ngIf="showIcons" [class]="item.iconClass"></i>
          {{ item.label }}
  
          <small *ngIf="item.extras?.description">{{
            item.extras.description
          }}</small>
        </li>
      </ng-container>
    </ul>
  </ng-template>  
    `,

    `
@Component(/* component metadata */)
export class NavbarComponent{

  menuItems$: Observable<MenuItem[]>;
  keyword = '';

  trackByFn: TrackByFunction<MenuItem> = (i, item) => item.id;

  constructor(menuService: MenuService) {
    this.menuItems$ = menuService.getMenuItems$();
  }

  search() {
    // ...
  }
  onMouseOver(event: MouseEvent) {
    // ...
  }
}

    `,
  ];

  tabs = standardTabs;

  // menuItems$: Observable<MenuItem[]>;
  // keyword = '';

  // trackByFn: TrackByFunction<MenuItem> = (i, item) => item.id;

  // constructor(menuService: MenuService) {
  //   this.menuItems$ = menuService.getMenuItems$();
  // }

  // search() {
  //   // ...
  // }
  // onMouseOver(event: MouseEvent) {
  //   // ...
  // }
}
