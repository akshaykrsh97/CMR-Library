import { Component, OnInit } from '@angular/core';
import { UserdataService } from "app/userdata.service";
import {Studentdetails } from "app/userdatalist";
import { BookexchService } from "app/dashboard/bodylib/bookexch.service";

@Component({
  selector: 'app-profiledata',
  template: `
   <div class="col-md-9  admin-content" id="profile">

                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">Name</h3>
                    </div>
                    <div class="panel-body">
                        {{loggeduser.studentname}}
                    </div>
                </div>
                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">Email</h3>
                    </div>
                    <div class="panel-body">
                        {{loggeduser.studentemail}} 
                    </div>
                </div>
                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">USN</h3>

                    </div>
                    <div class="panel-body">
                        {{loggeduser.studentusn}}
                    </div>
                </div>

                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">User ID</h3>

                    </div>
                    <div class="panel-body">
                       {{loggeduser.studentid}}
                    </div>
                </div>

                <div class="panel panel-info" style="margin: 1em;">
                    <div class="panel-heading">
                        <h3 class="panel-title">Student Adderss</h3>

                    </div>
                    <div class="panel-body">
                       {{loggeduser.studentaddr}}
                    </div>
                </div>


            </div>
  `,
  styles: []
})
export class ProfiledataComponent implements OnInit {


loggeduser : Studentdetails;
  constructor(private dataService: UserdataService) { }



 
  ngOnInit() {

this.loggeduser = this.dataService.sendloggedin();
//this.loggeduser = new Userdatalist(0,'','','','');

  }
  

 

}
