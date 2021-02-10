import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: number[], reverse: boolean): number[] {
    const sortedArr = value.sort((a, b) => a - b);

    if (reverse) {
      return sortedArr.reverse();
    }

    return sortedArr;
  }
}
