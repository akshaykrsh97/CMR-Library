import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header.component';
import { BodylibComponent } from './dashboard/bodylib/bodylib.component';
import { BookdetailComponent } from './dashboard/bodylib/bookdetail/bookdetail.component';
import { LoginlibComponent } from './loginlib/loginlib.component';
import { ForgotComponent } from './loginlib/forgot.component';
import { RegisterlibComponent } from './registerlib/registerlib.component';
import { MouseopDirective } from "app/mouseop.directive";
import { RouterModule } from "@angular/router";
import { BookreqComponent } from './dashboard/bodylib/bookreq/bookreq.component';
import { UserdataService } from "app/userdata.service";
import { logrouting } from "app/logroutes";
import { BookborrComponent } from './dashboard/bodylib/bookborr/bookborr.component';
import { BooknewreqComponent } from './dashboard/bodylib/booknewreq/booknewreq.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ProfiledataComponent } from "app/dashboard/profile/profiledata.component";
import { ProchangepassComponent } from './dashboard/profile/prochangepass.component';
import { ProenterdetailComponent } from './dashboard/profile/proenterdetail.component';
import { ProsettingsComponent } from './dashboard/profile/prosettings.component';
import { proroute } from "app/dashboard/profile/routeprofile";
import { BookfilterPipe } from './dashboard/bodylib/bookdetail/bookfilter.pipe';
import { BookexchService } from "app/dashboard/bodylib/bookexch.service";
//import { proroute } from "app/dashboard/profile/routeprofile";

//import { bookroute } from "app/dashboard/bodylib/bodyroutes";






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BodylibComponent,
    BookdetailComponent,
    LoginlibComponent,
    ForgotComponent,
    RegisterlibComponent,
    MouseopDirective,
    BookreqComponent,
    BookborrComponent,
    BooknewreqComponent,
    ProfileComponent,
    ProfiledataComponent,
    ProchangepassComponent,
    ProenterdetailComponent,
    ProsettingsComponent,
    BookfilterPipe
  ],
  imports: [BrowserModule,ReactiveFormsModule,logrouting,proroute,HttpModule],

  providers: [UserdataService,BookexchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
