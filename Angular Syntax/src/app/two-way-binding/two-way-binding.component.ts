import { Component, OnInit } from '@angular/core';
import { twoWayBindingCodeSnippets } from './two-way-binding-code-snippets';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent {
  codeSnippets = twoWayBindingCodeSnippets;

  myCount = 1;
}
