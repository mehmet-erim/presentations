import { Component, OnInit } from '@angular/core';
import { propertyBindingCodeSnippets } from './property-binding-code-snippets';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [
    `
      .rectangle {
        width: 100%;
        height: 50px;
        margin: 8px;
        background-color: #c12475;
        font-size: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class PropertyBindingComponent {
  codeSnippets = propertyBindingCodeSnippets;
}
