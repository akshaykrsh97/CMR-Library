import { Component, OnInit } from '@angular/core';
import { UserdataService } from "app/userdata.service";
import {Studentdetails } from "app/userdatalist";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  myusn : string = 'sudarshan';
  myemail: string = 'pass';
  loggedin : Studentdetails;

  constructor(private dataService : UserdataService) { }

  ngOnInit() {
//this.loggedin = new Userdatalist(13069,'Sudarshan K Shanbhag','sush14ec@cmrit.ac.in','1cr14ec189','');
this.loggedin = this.dataService.sendloggedin();
 }






}
