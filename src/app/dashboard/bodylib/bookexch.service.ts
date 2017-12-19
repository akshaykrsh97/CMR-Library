import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/Rx';

import { Booksearch, Requestedbook, Booklistitems } from "app/dashboard/bodylib/bookdetail/booksdetail";
import { UserdataService } from "app/userdata.service";


@Injectable()
export class BookexchService {

a :number;
i: number;


public searchbooks : Booksearch[]=[

new Booksearch('Microprocessor a handy book for 6th sem of Engineering', 'A P Godse', 0,15),
new Booksearch('Microcontroller', 'Balaguru Swami', 18 ,5),
new Booksearch('C ++ Reference', 'Mc Grew Hill', 40,10),
new Booksearch('Antenna and wave Propagation', 'Ghiridhar', 25,15),
new Booksearch('8086 Intel Processor', 'Bery B bray', 19,10)


];


public addtolist : Booksearch[]= [];
////to database
public requestdatabase : Requestedbook[]=[];

/////borrowed book
public borrowbook : Booklistitems[] =[
new Booklistitems(123566,'Microprocessor','Aravin',13069,"30 May 169","12 Feb 255",15),
new Booklistitems(25465,'Ajsljdd','Aravin',13069,"30 May 169","12 Feb 255",15)

];


booksinlibrary(){
return this.searchbooks;

}
numofbooks(){
  return this.searchbooks.length;
}



requestedbook(item: Booksearch){
  
if(this.addtolist.indexOf(item) !== -1){    // -1 means not part of array
 return;
}
this.addtolist.push(item);
}

sendrequestedbook(){
  return this.addtolist;
}

requestbookcount(){

  return this.addtolist.length;
}

removefromrequest(item: Booksearch){
this.addtolist.splice(this.addtolist.indexOf(item),1)

}
////it is to database
sendtodatabase(data : Requestedbook){

this.requestdatabase.push(data);

}
//////////////

 constructor(private http: Http, private userdataservice: UserdataService) {}

sendid(){


  return this.userdataservice.loggeedinstudents.studentid;
}
////send to borrow
sendborrowbook(){

  return this.borrowbook;
}








 





 


getdata(){

  // return this.http.get('http://localhost/myapp/allbooks.php')
  // .map(res => res.json());


}











}
