import { RouterModule } from "@angular/router";

import { ProenterdetailComponent } from "app/dashboard/profile/proenterdetail.component";
import { ProchangepassComponent } from "app/dashboard/profile/prochangepass.component";
import { ProfiledataComponent } from "app/dashboard/profile/profiledata.component";
import { ProsettingsComponent } from "app/dashboard/profile/prosettings.component";


export const ROUTE_PROF = [

{  path: 'profiledetails', component:ProfiledataComponent  },
{  path: 'passwordchange', component:ProchangepassComponent  },
{  path: 'enterdata', component:ProenterdetailComponent  },
{  path: 'settings', component:ProsettingsComponent  }





];

export const proroute = RouterModule.forRoot(ROUTE_PROF);
