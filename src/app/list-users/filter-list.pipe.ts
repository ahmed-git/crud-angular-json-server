import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  name: string;

  transform(list: User[], filter: string): any {
    if(!filter) return list;

    return list ? list.filter(user => {
      this.name = user.firstName + user.lastName;
      return this.name.includes(filter)}) : [];
  }

}
