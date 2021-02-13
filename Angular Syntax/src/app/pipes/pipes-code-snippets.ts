import { standardTabs } from '../event-binding/event-binding-code-snippets';

export const pipesCodeSnippets = {
  plain: {
    codes: [
      `
{{ birthdate }}
        `,
      `
birthdate = new Date(1980, 0, 1);
        `,
    ],
    tabs: standardTabs,
  },

  date: {
    codes: [
      `
{{ birthdate | date }}
        `,
      `
birthdate = new Date(1980, 0, 1);
        `,
    ],
    tabs: standardTabs,
  },

  parameter: {
    codes: [
      `
{{ "2021.2.13" | date: "long" }}
        `,
    ],
    tabs: ['HTML'],
  },

  chained: {
    codes: [
      `
{{ createdAt | async | date: "dd MMMM yyyy EEEE" }}
        `,
      `
createdAt = Promise.resolve(new Date());
        `,
    ],
    tabs: standardTabs,
  },

  custom: {
    codes: [
      `
{{ (numbers | sort).join(" - ") }}
{{ (numbers | sort: true).join(" - ") }}
        `,
      `
numbers = [302, 103, 871, 1, 99, 0];
        `,
      `
@Pipe({
name: 'sort',
})
export class SortPipe implements PipeTransform {
    transform(value: number[], reverse: boolean): number[] {
        const sortedArr = value.sort((a, b) => a - b);
        if (reverse) return sortedArr.reverse();
        
        return sortedArr;
    }
}      
        `,
    ],
    tabs: ['HTML', 'TS', { label: 'SortPipe', lang: 'ts' }],
  },
};
