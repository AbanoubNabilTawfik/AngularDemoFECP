import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cielnumber'
})
export class CielnumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.ceil(value);
  }

}
