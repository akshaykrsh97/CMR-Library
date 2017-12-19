import { LoginlibComponent } from "app/loginlib/loginlib.component";
import { RegisterlibComponent } from "app/registerlib/registerlib.component";
import { ForgotComponent } from "app/loginlib/forgot.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { ROUTE_BODY } from "app/dashboard/bodylib/bodyroutes";
import { ROUTE_PROF } from "app/dashboard/profile/routeprofile";

export const LOG_ROUTES = [

{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginlibComponent  },
{ path: 'register', component: RegisterlibComponent  },
{ path: 'forgotpassword', component: ForgotComponent  },
{ path: 'welcome/:id', component: DashboardComponent },
// { path: 'welcome/:id', component: DashboardComponent },
{ path: 'welcome/:id', component: DashboardComponent, children : ROUTE_BODY}
];


export const logrouting = RouterModule.forRoot(LOG_ROUTES);