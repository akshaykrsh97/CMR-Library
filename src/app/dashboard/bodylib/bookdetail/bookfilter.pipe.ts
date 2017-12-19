import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {

lower : string;

one: string;

  transform(value: any , args?: any): any {

  
let resultarray = [];
for(let item of value ){
  this.lower = item.toLowerCase();
  this.one = args.toLowerCase();
  
  if(this.lower.match('^.*'+ this.one + '.*$')){

    resultarray.push(item);

  }
  

}
return resultarray;

  }
  

  

}
