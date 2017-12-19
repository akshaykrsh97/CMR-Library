import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-prochangepass',
  template: `
    <div class="col-md-9  admin-content" id="change-password">
                <form action="password" 
                [formGroup] = "passForm"
                (ngSubmit)="subPass()"
                >

           
                    <div class="panel panel-info" style="margin: 1em;">
                        <div class="panel-heading">
                            <h3 class="panel-title"><label for="new_password" class="control-label panel-title">New Password</label></h3>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="password" id="new_password" 
                                    formControlName="newpassword"
                                    >
                                </div>
                            </div>

                        </div>
                    </div>

             
                    <div class="panel panel-info" style="margin: 1em;">
                        <div class="panel-heading">
                            <h3 class="panel-title"><label for="confirm_password" class="control-label panel-title">Confirm password</label></h3>
                        </div>
                        <div class="panel-body">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="password_confirmation" id="confirm_password"
                                    formControlName="confirmpass"
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
export class ProchangepassComponent implements OnInit {
passForm : FormGroup;
  constructor() { 
this.passForm = new FormGroup({
'newpassword' : new FormControl('',Validators.required),
'confirmpass' : new FormControl('',Validators.required)


});



  }

  subPass(){

    console.log(this.passForm);
  }

  ngOnInit() {
  }

}
