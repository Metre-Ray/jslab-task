import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringPipe'
})
export class FilteringPipePipe implements PipeTransform {

  transform(value: any, searchCriteria: string, field?: string[]): any {
    if (value.length > 0) return searchCriteria
      ? value.filter((item) => {
        let temp = item;
        field.forEach(element => {
          temp = temp[element];
        });
        return temp.toString().toLowerCase().includes(searchCriteria);
      })
      : value;
    return value;
  }

}
