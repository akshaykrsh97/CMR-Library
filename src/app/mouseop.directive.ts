import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseop]'
})
export class MouseopDirective {

  constructor() { }

  @HostBinding('class.open') get opened(){
return this.isopen;
}

@HostListener('mouseover') open()
{
this.isopen = true;
  
} 
@HostListener('mouseleave') close()
{
this.isopen = false;
  
}


private isopen = false;



}
