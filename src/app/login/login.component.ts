import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.nullValidator, Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  login() {
  this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
  }



}
