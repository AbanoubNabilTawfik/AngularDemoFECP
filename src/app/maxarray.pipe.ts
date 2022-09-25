import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxarray'
})
export class MaxarrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let max=value[0];

    for(let i=0; i<value.length;i++)
    {
      if(value[i]>max)
      {
        max=value[i];
      }
    }

    return max;
  }

}
