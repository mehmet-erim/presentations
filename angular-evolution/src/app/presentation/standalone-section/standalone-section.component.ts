import { Component } from '@angular/core';
import { RemoveSelectorDirective } from '../../remove-selector.directive';
import { codeSnippets } from '../code-snippets';

@Component({
  selector: 'standalone-section',
  templateUrl: 'standalone-section.component.html',
  standalone: true,
  hostDirectives: [RemoveSelectorDirective],
})
export class StandaloneSectionComponent {
  before = ` 
@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent]
})
export class MyModule { }
  `;

  after = `
@Component({
  standalone: true,
  imports: [CommonModule],
  ...
})
export class MyComponent { }
  `;
  codeSnippets = codeSnippets;
}
