import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import { codeSnippets } from './code-snippets';
import { StandaloneSectionComponent } from './standalone-section/standalone-section.component';
import { AngularLogoComponent } from '../angular-logo.component';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  standalone: true,
  imports: [CommonModule, StandaloneSectionComponent, AngularLogoComponent],
})
export default class PresentationComponent {
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  codeSnippets = codeSnippets;

  ngAfterViewInit() {
    const deck = new Reveal({
      plugins: [Markdown, Highlight],
    });

    const startSlideIndexH =
      parseInt(this.#route.snapshot.queryParams['slideH'], 10) || 0;
    const startSlideIndexV =
      parseInt(this.#route.snapshot.queryParams['slideV'], 10) || 0;

    deck.initialize().then(() => {
      0;
      deck.slide(startSlideIndexH, startSlideIndexV);

      deck.on('slidechanged', (event: any) => {
        this.#router.navigate([], {
          queryParams: {
            slideH: event.indexh,
            slideV: event.indexv,
          },
        });
      });
    });
  }
}
