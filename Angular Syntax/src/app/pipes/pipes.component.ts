import { Component, OnInit } from '@angular/core';
import { pipesCodeSnippets } from './pipes-code-snippets';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  codeSnippets = pipesCodeSnippets;

  birthdate = new Date(1980, 0, 1);

  createdAt = Promise.resolve(new Date());
}
