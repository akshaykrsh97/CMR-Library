import { Component, OnInit } from '@angular/core';
import { Http,Response} from "@angular/http";
import { BookexchService } from "app/dashboard/bodylib/bookexch.service";
import { Booklistitems } from "app/dashboard/bodylib/bookdetail/booksdetail";


@Component({
  selector: 'app-bookborr',
  templateUrl: './bookborr.component.html',
  styles: []
})
export class BookborrComponent implements OnInit {

a: number=0;
b:number;
books: Booklistitems[]=[];
data;
  constructor( private http : Http,
    private bookExchangeService : BookexchService) { }

  ngOnInit() {

// this.bookExchangeService.getdata()
//         .subscribe(
//             res => this.books = res
//              );
  

     this.books = this.bookExchangeService.sendborrowbook();
  // this.a = this.books.length;
  // this.b= 2-this.a;

}



  
alertbook(){
  alert("5 days more to return book");

}

}
