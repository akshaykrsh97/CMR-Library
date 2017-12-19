import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-proenterdetail',
  template: `
  
   <div class="col-md-9  admin-content" >
                <form action="text" 
                [formGroup] = "formdetail"
                (ngSubmit)="subPass1()"
                >

           
                    <div class="panel panel-info" style="margin: 1em;">
                        <div class="panel-heading">
                            <h3 class="panel-title"><label for="new_password" class="control-label panel-title">Contact Number</label></h3>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="password" id="new_password" 
                                    formControlName="phone"
                                    >
                                </div>
                            </div>

                        </div>
                    </div>

             
                    <div class="panel panel-info" style="margin: 1em;">
                        <div class="panel-heading">
                            <h3 class="panel-title"><label for="confirm_password" class="control-label panel-title">Feedback</label></h3>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="password_confirmation" id="confirm_password"
                                    formControlName="feedback"
                                     >
                                </div>
                            </div>
                        </div>
                    </div>

           
                    <div class="panel panel-info border" style="margin: 1em;">
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="pull-left">
                                    <input type="submit" class="form-control btn btn-primary" name="submit" id="submit">
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>       



  `,
  styles: []
})
export class ProenterdetailComponent implements OnInit {
formdetail : FormGroup;
  constructor() { 
this.formdetail = new FormGroup({
'phone' : new FormControl('',Validators.required),
'feedback' : new FormControl('')


});



  }

  subPass1(){

    console.log(this.formdetail);
  }

  ngOnInit() {
  }


}
