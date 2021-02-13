import { Component } from '@angular/core';
import { eventBindingCodeSnippets } from './event-binding-code-snippets';
import fireworks from 'fireworks';

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

  myCount = 3;

  onMouseOver(event: MouseEvent) {
    console.log(event);
  }

  onInput(event: InputEvent) {
    console.log(event);
  }

  onClick(event: MouseEvent) {
    console.log(event);
  }

  onError() {
    this.imgSrc = 'assets/images/no-image.png';
  }

  submit(event: KeyboardEvent) {
    firework();
  }

  cancel(event: KeyboardEvent) {
    console.log(event);
  }

  onCountChange(count: number) {
    this.myCount = count;
  }
}

function firework() {
  fireworks({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    canvasWidth: 1200,
    canvasHeight: 800,
  });

  setTimeout(() => {
    fireworks({
      x: window.innerWidth / 3,
      y: window.innerHeight / 3,
      canvasWidth: 1200,
      canvasHeight: 800,
    });
  }, 750);

  setTimeout(() => {
    fireworks({
      x: window.innerWidth / 4,
      y: window.innerHeight / 4,
      canvasWidth: 1200,
      canvasHeight: 800,
    });
  }, 1500);
}
