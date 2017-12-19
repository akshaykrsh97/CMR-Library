import { Component, OnInit,Input } from '@angular/core';
import { Response } from '@angular/http'


import { Booksearch, Requestedbook } from "app/dashboard/bodylib/bookdetail/booksdetail";
import { BookexchService } from "app/dashboard/bodylib/bookexch.service";

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styles: [`
 
  
  `]
})
export class BookdetailComponent implements OnInit {

  
   
   




//////////////new

find:number = 1;

 i:number=0;
opq:number = 1;

a: number;


j:number=0;
allbooks : Booksearch[]=[];
totalbooks : number;
newone : Booksearch;
searchedbook: Booksearch[] = [];
values : any=[];
todatabase: Requestedbook;
today: number = Date.now();




  constructor(private bookExchange:BookexchService) {}






  ngOnInit() {
     //this.books= this.bookExchange.getbooks();

   this.allbooks = this.bookExchange.booksinlibrary();
   //this.totalbooks = this.bookExchange.numofbooks();
// this.bookExchange.getdata()
//         .subscribe(
//                res => this.books =res
//                );


}



searchbybookname(){
 this.values=[];
  this.find = 1;
  //this.books= this.bookExchange.getbooks();
 
  //this.books= this.bookExchange.getbooks();
    for(this.i=0;this.i<this.allbooks.length;this.i++){
this.values.push(this.allbooks[this.i].bookname);

}
}


onKey(v : string){
//   if(this.find== 2){
// this.searchbyauth();}
// else{
  this.searchbybookname();
this.opq = 1;
 this.a = this.bookExchange.requestbookcount(); 
 
}




//For book search
addclich(t :string){
this.j=0;

  if(this.find == 1){
this.searchedbook = [];

for(this.i = 0;this.i<this.allbooks.length; this.i++){
if(this.allbooks[this.i].bookname == t){
this.newone = new Booksearch(this.allbooks[this.i].bookname,this.allbooks[this.i].bookauth,
this.allbooks[this.i].numbofbooks,this.allbooks[this.i].numberofref);

this.searchedbook.push(this.newone);
// new one
this.j++;


////till here

}
this.opq=0;
}

}

//end
}



request(kk : Booksearch){

if(this.a >= 2){
alert("You have already requested 2 Bookks");
}else{
  this.bookExchange.requestedbook(kk);
this.todatabase = new Requestedbook(this.bookExchange.sendid(),kk.bookname,kk.bookauth,this.today);
this.bookExchange.sendtodatabase(this.todatabase);
  this.a = this.bookExchange.requestbookcount(); 
}



}



















}












