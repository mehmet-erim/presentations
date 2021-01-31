import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  // interpolation: ['[[', ']]'],
})
export class InterpolationComponent {
  tabs = ['HTML', 'TS'];

  onlyHtmlTab = ['HTML'];

  codes1 = [
    `
<h3>Merhaba {{ user }} 👋</h3>
`,
    `
@Component(/* component metadata */)
export class MyComponent {
  user = 'Mehmet';
}
`,
  ];

  codes2 = [
    `
<img src="{{ imgUrl }}" />

<!-- ----------- -->

<img [src]="imgUrl" />
`,
    `
@Component(/* component metadata */)
export class MyComponent {
  imgUrl = 'https://avatars2.githubusercontent.com/u/47100904?s=200&v=4';
}
`,
  ];

  codes3 = [
    `
<p>11 ile 29'u toplayın <strong>{{ 11 + 29 }}</strong> yapar!</p>
`,
  ];

  codes4 = [
    `
<p>11 ile 29'u toplayın {{ sum(11, 29) }} yapar!</p>
`,
    `
@Component(/* component metadata */)
export class MyComponent {
  sum(a: number, b: number) {
    return a + b;
  }
}
`,
  ];

  codes5 = [
    `
<h3>Merhaba <% user %> 👋</h3>
`,
    `
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  interpolation: ['<%', '%>'],
})
export class MyComponent {
  user = 'Mehmet';
}
`,
  ];

  getter = [
    `
<p>11 ile 29'u toplayın {{ total }} yapar!</p>
`,
    `
export class MyComponent {
  get total(): number {
    return 11 + 29
  }
}
`,
  ];

  optionalChaining = [
    `
{{ data.user.username }}
<!-- sam -->

{{ data.user.address?.city | json }}
<!-- null -->

{{ data.user.address?.city?.x?.y?.z | json }}
<!-- null -->

{{data.user.address.city}}
<!-- Error -->
`,
    `
export class MyComponent {
  data = {
    user: {
      username: 'sam'
    }
  }
}
`,
  ];

  user = 'Mehmet';

  imgUrl = 'https://avatars2.githubusercontent.com/u/47100904?s=200&v=4';

  data = {
    user: {
      username: 'sam',
    },
  } as any;

  get total(): number {
    return 11 + 29;
  }

  sum(a: number, b: number) {
    return a + b;
  }
}
