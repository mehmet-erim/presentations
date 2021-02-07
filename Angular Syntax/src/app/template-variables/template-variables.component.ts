import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { templateVariablesCodeSnippets } from './template-variables-code-snippets';
import fireworks from 'fireworks';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss'],
})
export class TemplateVariablesComponent implements OnInit {
  codeSnippets = templateVariablesCodeSnippets;

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('name') nameRef: ElementRef<HTMLInputElement>;
  @ViewChild('email') emailRef: ElementRef<HTMLInputElement>;
  start() {
    this.nameRef.nativeElement.style.display = 'block';
    this.emailRef.nativeElement.style.display = 'block';
    this.nameRef.nativeElement.focus();
  }

  subscribe() {
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
}
