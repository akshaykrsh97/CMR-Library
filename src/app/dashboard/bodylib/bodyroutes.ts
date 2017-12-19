import { RouterModule } from "@angular/router";
import { BookdetailComponent } from "app/dashboard/bodylib/bookdetail/bookdetail.component";
import { BookreqComponent } from "app/dashboard/bodylib/bookreq/bookreq.component";
import { BookborrComponent } from "app/dashboard/bodylib/bookborr/bookborr.component";
import { BooknewreqComponent } from "app/dashboard/bodylib/booknewreq/booknewreq.component";
import { ProfileComponent } from "app/dashboard/profile/profile.component";
import { ROUTE_PROF } from "app/dashboard/profile/routeprofile";


export const ROUTE_BODY = [

 //{  path: 'welcome/:id/', redirectTo:'bookdetails', pathMatch: 'full'  },

{  path: 'bookdetails', component: BookdetailComponent  },
{  path: 'bookrequest', component: BookreqComponent     },
{  path: 'bookborrow', component:  BookborrComponent    },
{  path: 'newbookreq', component:  BooknewreqComponent  },
//{ path: 'profile' , component: ProfileComponent },
{ path: 'profile' , component: ProfileComponent, children: ROUTE_PROF }


];

export const bookroute = RouterModule.forRoot(ROUTE_BODY);