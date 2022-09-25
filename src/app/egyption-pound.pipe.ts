import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyptionPound'
})
export class EgyptionPoundPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "LE"+value;
  }

}
