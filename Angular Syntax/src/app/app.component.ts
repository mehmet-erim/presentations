import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

const sectionsColor = [
  '#7f8c8d',
  '#ffffff',
  '#1abc9c',
  'rgb(173 150 61)',
  'rgb(54 125 173)',
  '#73433e',
  '#8c7ae6',
  '#a04d39',
  'rgb(66 177 176)',
  'rgb(177 85 98)',
  'rgb(173 30 30)',
  '#808e9b',
  '#0be881',
  '#b71540',
  '#7f8c8d',
  '#1abc9c',
  '#f1c40f',
  '#3498db',
  '#e74c3c',
  '#8c7ae6',
  '#e84118',
  '#00d8d6',
  '#f53b57',
  '#ffa801',
  '#808e9b',
  '#0be881',
  '#b71540',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('codeEditor') codeEditorRef: TemplateRef<any>;
  config: any;
  fullpageRef: any;

  get fullscreen(): boolean {
    return window.innerHeight === screen.height;
  }

  constructor(private dialog: DialogService) {
    this.listenToKeyup();
  }

  private listenToKeyup() {
    fromEvent(window, 'keyup')
      .pipe(
        filter((event: KeyboardEvent) => event.key === 'ü' || event.key === 'ğ'),
        debounceTime(150)
      )
      .subscribe((event) => {
        if (event.key === 'ü') this.toggleFullscreen();
        if (event.key === 'ğ') {
          this.dialog.open(this.codeEditorRef, { width: '50%', height: '50%' });
        }
      });
  }

  ngOnInit() {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: Array.from(document.querySelectorAll('.section')).map((_, i) => '' + (i + 1)),
      navigation: true,
      navigationPosition: 'left',
      sectionsColor,

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      },
    };
  }

  getRef(fullPageRef) {
    this.fullpageRef = fullPageRef;

    // this.fullpageRef.setAllowScrolling(false);
  }

  toggleFullscreen() {
    const elem: any = document.documentElement;
    if (
      !document.fullscreenElement &&
      !(document as any).mozFullScreenElement &&
      !(document as any).webkitFullscreenElement &&
      !(document as any).msFullscreenElement
    ) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  }
}
