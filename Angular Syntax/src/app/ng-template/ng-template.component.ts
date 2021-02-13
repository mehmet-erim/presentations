import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ngTemplateCodeSnippets } from './ng-template-code-snippets';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss'],
})
export class NgTemplateComponent {
  codeSnippets = ngTemplateCodeSnippets;

  user: string;

  counterComponent = CounterComponent;

  setUser() {
    setTimeout(() => (this.user = 'John Doe'), 2000);
  }

  showHiddenContent() {
    const temp = document.querySelector('#hidden-content') as HTMLTemplateElement;
    const clone = temp.content.cloneNode(true);
    document.querySelector('#template-wrapper').appendChild(clone);
  }
}
