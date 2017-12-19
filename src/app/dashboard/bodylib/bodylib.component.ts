import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodylib',
  templateUrl: './bodylib.component.html',
  styles: [`
  .active{
    color: black;
      //border: 2px solid dark-blue;
      background-color: blue;

  }
  
  `]
})
export class BodylibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
