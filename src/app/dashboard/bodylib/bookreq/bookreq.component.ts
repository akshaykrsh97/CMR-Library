import { Component, OnInit } from '@angular/core';
import { Booksearch, Requestedbook } from "app/dashboard/bodylib/bookdetail/booksdetail";
import { BookexchService } from "app/dashboard/bodylib/bookexch.service";

@Component({
  selector: 'app-bookreq',
  templateUrl: './bookreq.component.html',
  styles: []
})
export class BookreqComponent implements OnInit{
  
  gotitem: Booksearch[]=[];
todatabase : Requestedbook;

  today: number = Date.now();
  a: number= 0;
  b:number=0;
  c:number;




  constructor(private bookExchange:BookexchService) {}

 ngOnInit() {
    this.gotitem= this.bookExchange.sendrequestedbook();
  this.a = this.gotitem.length;
  this.b= 2 - this.a;
              }





   

         

removebook(item: Booksearch){

this.bookExchange.removefromrequest(item);
this.a = this.gotitem.length;
  this.b= 4 - this.a;

}

   





}
