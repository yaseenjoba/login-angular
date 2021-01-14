import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { AuthenticationGuardService } from './authentication-guard.service';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

//,canActivate:[AuthenticationGuardService]
const routes: Routes = [{path:'profile',component: ProfileComponent,canActivate:[AuthenticationGuardService]},{path:'login',component: LoginComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
