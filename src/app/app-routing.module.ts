import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import { Role } from './login/role';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { Ancillaryservices } from './ancillary-services/ancillaryservices.component';
import { SignupComponent } from './login/signup.components';
import { InFlightCreate } from './Inflight/inflightcreate.component';
import { EditUsers } from './login/edit-profile.component';

export const routes: Routes = [
  {    
    path: '',    
    //redirectTo: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
   /* path: '',
    component: HomeComponent,   */ 
  },    
  {    
    path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    /*path: 'admin',
    component: AdminComponent,
    data: { roles: [Role.Admin] }*/
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'ancilary',
    component: Ancillaryservices
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'inflight',
    component: InFlightCreate
  },
  {
    path:'editprofile',
    component: EditUsers
  }
  
  /*{
    path: 'login',
    component: LoginComponent
},

// otherwise redirect to home
{ path: '**', redirectTo: '' }*/
];

export const loginroutes: Routes = [
  {
    path: 'login',    
    component: LoginComponent,  
    pathMatch: 'full',
  },    
  {    
    path:'admin',
    component: AdminComponent,
    data: { roles: [Role.Admin] } 
  },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(loginroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AdminComponent]
