import { Injectable, EventEmitter } from '@angular/core';

import { Http,Response } from "@angular/http";
import 'rxjs/Rx';


import {  Logindata, Studentdetails } from "app/userdatalist";




@Injectable()
export class UserdataService {
endata : Logindata;

  constructor(private http : Http) { }




Studentdata: Studentdetails[]=[
   new Studentdetails(13055	,	'Akshay Krishna'	,'1CR14EC019'	,'akan14ec@cmrit.ac.in','123','Bhaiyappan Halli, Kolar'),
    new Studentdetails(	13069	,	'Sudarshan K Shanbhag'	,'1CR14EC189'	,'sush14ec@cmrit.ac.in','123','Near Vitobha Temple, Bunder Road, Kumat 581343')

];



loggeedinstudents: Studentdetails;













 




userdata(){
return this.Studentdata;
}


sendloggedin(){
  return this.loggeedinstudents;
}



loggedinid(item : Studentdetails){
this.loggeedinstudents= item;

}


registereduser(item: Studentdetails){
this.Studentdata.push(item);

}




}








