import { Component, OnInit } from '@angular/core';
import { FormGroup,
   FormBuilder,
    Validators,
    FormControl } from '@angular/forms'
import { UserdataService } from "app/userdata.service";
import { Router } from "@angular/router";
import {  Studentdetails } from "app/userdatalist";





@Component({
  selector: 'app-registerlib',
  templateUrl: './registerlib.component.html',
  styles: []
})
export class RegisterlibComponent implements OnInit {
  
  regForm: FormGroup;
data1 : String;
data2:String;
data3: String='';
reguser: Studentdetails;



constructor(private dataService: UserdataService , private router : Router) { 
   this.regForm = new FormGroup({
      'email': new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(cmrit.ac.in)?")]),
      'usn': new FormControl('',[Validators.required]),
      'password':new FormControl('',Validators.required),
      'name' : new FormControl('',Validators.required),
      'userid': new FormControl('',[Validators.required,Validators.pattern("[0-9]+")]),
      'addr' : new FormControl('',Validators.required),



});

}


checkpass(y: string){

 //this.data2 = this.regForm.value.conpassword;
  this.data1 = this.regForm.value.password;
if(this.data1!=y){
this.data3 = 'Password not Matching';
}
else{
this.data3 = 'Matched';
}
}



onsubmit(){

this.reguser = new Studentdetails(
  this.regForm.value.userid,
  this.regForm.value.name,
this.regForm.value.usn,
this.regForm.value.email,
this.regForm.value.password,
this.regForm.value.addr,
);


  if(this.data3 == 'Matched'){
 this.dataService.registereduser(this.reguser); 
 this.router.navigate(['/login']);

}
 else{
   alert('Sorry');
 }
//this.dataService.registereduser(this.reguser);
}

  ngOnInit() {
  }


}

















