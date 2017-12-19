import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgot',
  template: `



<form class="form-horizontal" style="margin-left : 6cm; margin-top : 6cm; " 
   [formGroup]="forgotForm"
    (ngSubmit)="forSubmit()" 

   >
  <h1 style="margin-left : 8cm; margin-top : 6cm;" > Forgot Password </h1>

  <div class="form-group">
    <label  class="col-sm-2 control-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" placeholder="Email"
      formControlName="email"
      >
    </div>
  </div>

  <div class="form-group" >
    <div class="col-sm-offset-2 col-sm-6">
      <button type="submit" class="btn btn-success" style="width: 14cm" 
[disabled]="!forgotForm.valid"
  
      >Register</button>
      <br><br>
  <p>  
  <button type="button" class="btn btn-info" [routerLink]="['/login']">Back</button>
    </p>

    </div>
  </div>





  
  
  `,
  styles: []
})
export class ForgotComponent implements OnInit {
forgotForm : FormGroup;
  constructor() {

this.forgotForm = new FormGroup({

'email' : new FormControl('',[Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(cmrit.ac.in)?")])

});

 }


forSubmit(){

console.log(this.forgotForm);


}

  ngOnInit() {
  }




}
