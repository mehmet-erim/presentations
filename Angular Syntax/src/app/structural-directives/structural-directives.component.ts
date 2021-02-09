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
  trackByFn: TrackByFunction<string> = (index: number, hero: string) => hero;
}
