import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-booknewreq',
  templateUrl: './booknewreq.component.html',
  styles: []
})
export class BooknewreqComponent implements OnInit {
reqForm: FormGroup;
  constructor() { 
this.reqForm = new FormGroup({
'bookname': new FormControl('',Validators.required),
'bookauthor': new FormControl('',Validators.required),
'bookpub': new FormControl('',Validators.required),
'reldept': new FormControl('',Validators.required)
});

}

  ngOnInit() {
  }

  onSend(){

    console.log(this.reqForm);
  }

}
