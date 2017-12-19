import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserdataService } from "app/userdata.service";
import { Router } from "@angular/router";
import {Studentdetails } from "app/userdatalist";


@Component({
  selector: 'app-loginlib',
  templateUrl: './loginlib.component.html',
  styles: []
})
export class LoginlibComponent implements OnInit {
  newpass: string;
  newemail: string;
  newusn: string;
data : string;
data3: string;
i:number;
userdata: Studentdetails[];
  
  logForm: FormGroup;
  constructor(private dataService : UserdataService,private rout : Router) { 

this.logForm = new FormGroup({

'username' :new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(cmrit.ac.in)?")]),
'password': new FormControl('',Validators.required)

                            });

}



  ngOnInit() {

this.userdata = this.dataService.userdata();

             }

onlogsubmit(){


    for(this.i = 0;this.i<this.userdata.length;this.i++){

          if(this.logForm.value.username == this.userdata[this.i].studentemail  &&  this.logForm.value.password == this.userdata[this.i].studentpass)
          {
            this.dataService.loggedinid(this.userdata[this.i]);
            this.rout.navigate(['/welcome',this.userdata[this.i].studentusn,'bookdetails']);
      
          }
          


        }
        this.data3= 'Accunt not Found';
    }









}
