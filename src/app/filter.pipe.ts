import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let arrMatches = args.filter((arg)=> {
      if(Object.keys(arg).length != 0)
        return arg[args[args.length-1]] == value
      else
        return arg == value
    })
    
    return JSON.stringify(arrMatches);
  }

}