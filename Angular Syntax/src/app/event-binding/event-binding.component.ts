import { Component } from '@angular/core';
import { eventBindingCodeSnippets } from './event-binding-code-snippets';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [
    `
      .card {
        display: inline-block;
        font-size: 20px;
        background: #eeeeee;
        color: #333;
        padding: 20px;
        padding-top: 0;
        border-radius: 10px;
        box-shadow: #fff 0px 0.125rem 0.25rem !important;
      }
    `,
  ],
})
export class EventBindingComponent {
  codeSnippets = eventBindingCodeSnippets;

  imgSrc = 'https://example.com/no-image.jpg';

  inputValue = '';

  keyword = '';

  onKey(event: KeyboardEvent) {}

  onSave() {
    alert('save');
  }

  onClick(event: MouseEvent) {
    alert('clicked');
  }

  onError() {
    this.imgSrc = 'assets/images/no-image.png';
  }

  search(keyword: string) {
    this.keyword = keyword;
  }
}
