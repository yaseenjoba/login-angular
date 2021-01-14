import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }
  login(username:any,pass:any){
    if(username==="yaseen"&&pass==="12345"){
      localStorage.setItem('login','true');
      this.route.navigate(['profile']);
    }else {
      alert("wrong pass or username");
      localStorage.setItem('login','false');
      this.route.navigate(['login']);
    }
  }
  isAuthenticated(){
    console.log(localStorage.getItem('login'));
    
    if(localStorage.getItem('login')){
      return true;
    }
    return false;

  }
}
