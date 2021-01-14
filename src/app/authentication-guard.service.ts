import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate  {
  constructor(private authService: AuthService,private router:Router) { }
  canActivate() {  
    console.log(this.authService.isAuthenticated());
    
    if(this.authService.isAuthenticated()){
      return true;
    }else{
    this.router.navigate(['login']);
    return false;
  }
  }
}
