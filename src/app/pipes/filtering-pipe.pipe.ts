import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringPipe'
})
export class FilteringPipePipe implements PipeTransform {

  transform(value: any, searchCriteria: string, field?: string[]): any {
    console.log(field);
    if (value.length > 0) return searchCriteria
      ? value.filter((item) => {
        // console.log(item);
        // console.log('field: ', field);
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
