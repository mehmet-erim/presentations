import { Component, TrackByFunction } from '@angular/core';
import { structuralDirectivesCodeSnippets } from './structural-directives-code-snippets';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent {
  codeSnippets = structuralDirectivesCodeSnippets;

  heroes = ['Hulk', 'Wolverine', 'Iron Man'];

  user: string;

  templateTitle = '<template>';

  setUser() {
    setTimeout(() => (this.user = 'John Doe'), 2000);
  }
}
